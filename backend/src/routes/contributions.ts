import { Router } from "express";
import { randomBytes } from "node:crypto";
import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import {
  checkRateLimit,
  parsePagination,
  sanitizeContent,
} from "../lib/helpers";
import { requireAuth } from "../middleware/requireAuth";

export const publicContributionsRouter = Router();
export const adminContributionsRouter = Router();

const CONTRIBUTION_BROWSER_COOKIE = "lw_contribution_browser";
const CONTRIBUTION_BROWSER_COOKIE_MAX_AGE = 365 * 24 * 60 * 60 * 1000;

/**
 * ============================================================
 * PUBLIC CONTRIBUTIONS
 * ============================================================
 */

/**
 * POST /:id/contributions
 *
 * Public contribution submission.
 * Contributions are created as unapproved and must be
 * moderated by the article author.
 */
publicContributionsRouter.post("/:id/contributions", async (req, res) => {
  try {
    const { name, church, position, content } = req.body ?? {};

    /**
     * Basic type validation.
     */
    if (
      typeof name !== "string" ||
      typeof church !== "string" ||
      typeof position !== "string" ||
      typeof content !== "string"
    ) {
      return res.status(400).json({
        error:
          "Invalid input. Name, church, position, and content are required.",
      });
    }

    /**
     * Trim all user input.
     */
    const trimmedName = name.trim();
    const trimmedChurch = church.trim();
    const trimmedPosition = position.trim();
    const trimmedContent = content.trim();

    /**
     * Validate basic field lengths before sanitization.
     */
    if (trimmedName.length < 2 || trimmedName.length > 255) {
      return res.status(400).json({
        error: "Name must be between 2 and 255 characters",
      });
    }

    if (trimmedChurch.length < 2 || trimmedChurch.length > 160) {
      return res.status(400).json({
        error: "Church must be between 2 and 160 characters",
      });
    }

    if (trimmedPosition.length < 2 || trimmedPosition.length > 120) {
      return res.status(400).json({
        error: "Position must be between 2 and 120 characters",
      });
    }

    /**
     * Sanitize contribution content before storing it.
     */
    const sanitizedContent = sanitizeContent(trimmedContent);

    /**
     * Validate the sanitized content as well.
     */
    if (sanitizedContent.length < 3 || sanitizedContent.length > 5000) {
      return res.status(400).json({
        error: "Contribution must be between 3 and 5000 characters",
      });
    }

    /**
     * Make sure the article exists, is published,
     * and allows contributions.
     */
    const article = await prisma.article.findFirst({
      where: {
        id: req.params.id,
        status: "PUBLISHED",
      },
      select: {
        id: true,
        author: {
          select: {
            profile: {
              select: {
                enableContributions: true,
              },
            },
          },
        },
      },
    });

    if (!article) {
      return res.status(404).json({
        error: "Article not found",
      });
    }

    if (!article.author.profile?.enableContributions) {
      return res.status(403).json({
        error: "Contributions are disabled for this publication",
      });
    }

    const cookieValue = req.cookies?.[CONTRIBUTION_BROWSER_COOKIE];
    const browserId =
      typeof cookieValue === "string" && /^[a-f0-9]{64}$/i.test(cookieValue)
        ? cookieValue
        : randomBytes(32).toString("hex");

    if (browserId !== cookieValue) {
      res.cookie(CONTRIBUTION_BROWSER_COOKIE, browserId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: CONTRIBUTION_BROWSER_COOKIE_MAX_AGE,
        path: "/api",
      });
    }

    const existingContribution = await prisma.articleContribution.findUnique({
      where: {
        articleId_browserId: {
          articleId: article.id,
          browserId,
        },
      },
      select: { id: true },
    });

    if (existingContribution) {
      return res.status(409).json({
        error:
          "You have already contributed to this article from this browser.",
      });
    }

    /**
     * Basic IP-based rate limiting.
     * One contribution per minute per IP.
     */
    const rateLimitKey = `contribution-${req.ip ?? "unknown"}`;

    if (!checkRateLimit(rateLimitKey, 1, 60 * 1000)) {
      return res.status(429).json({
        error: "Please wait before submitting another contribution",
      });
    }

    /**
     * Create the contribution.
     *
     * approved defaults to false in the database.
     */
    const contribution = await prisma.articleContribution.create({
      data: {
        articleId: article.id,
        browserId,
        name: trimmedName,
        church: trimmedChurch,
        position: trimmedPosition,
        content: sanitizedContent,
      },
      select: {
        id: true,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Contribution submitted for moderation",
      contribution,
    });
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return res.status(409).json({
        error:
          "You have already contributed to this article from this browser.",
      });
    }

    console.error("Error creating contribution:", error);

    return res.status(500).json({
      error: "Failed to submit contribution",
    });
  }
});

/**
 * ============================================================
 * ADMIN CONTRIBUTIONS
 * ============================================================
 */

/**
 * All admin contribution routes require authentication.
 */
adminContributionsRouter.use(requireAuth);

/**
 * GET /
 *
 * Returns contributions belonging only to articles authored
 * by the currently authenticated user.
 *
 * Optional:
 *   ?approved=true
 *   ?approved=false
 *   ?limit=100
 *   ?offset=0
 */
adminContributionsRouter.get("/", async (req, res) => {
  try {
    const { limit, offset, approved } = req.query;

    const pagination = parsePagination(
      typeof limit === "string" ? limit : undefined,
      typeof offset === "string" ? offset : undefined,
      100,
    );

    const where: Prisma.ArticleContributionWhereInput = {
      article: {
        authorId: req.userId,
      },
    };

    /**
     * Optional moderation filter.
     */
    if (approved === "true") {
      where.approved = true;
    } else if (approved === "false") {
      where.approved = false;
    }

    const [contributions, total, pendingCount] = await Promise.all([
      prisma.articleContribution.findMany({
        where,
        select: {
          id: true,
          articleId: true,
          name: true,
          church: true,
          position: true,
          content: true,
          approved: true,
          approvedAt: true,
          approvedBy: true,
          createdAt: true,

          article: {
            select: {
              id: true,
              title: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: pagination.limit,
        skip: pagination.offset,
      }),

      prisma.articleContribution.count({
        where,
      }),

      /**
       * Pending count is deliberately calculated without
       * pagination so it represents the author's full queue.
       */
      prisma.articleContribution.count({
        where: {
          article: {
            authorId: req.userId,
          },
          approved: false,
        },
      }),
    ]);

    /**
     * Flatten article information for the frontend.
     */
    const formatted = contributions.map(({ article, ...contribution }) => ({
      ...contribution,
      articleTitle: article.title,
    }));

    return res.json({
      contributions: formatted,
      total,
      pendingCount,
    });
  } catch (error) {
    console.error("Error fetching contributions:", error);

    return res.status(500).json({
      error: "Failed to fetch contributions",
    });
  }
});

/**
 * PATCH /:id
 *
 * Approve or unapprove a contribution.
 */
adminContributionsRouter.patch("/:id", async (req, res) => {
  try {
    const { approved } = req.body ?? {};

    if (typeof approved !== "boolean") {
      return res.status(400).json({
        error: "Approved must be a boolean",
      });
    }

    /**
     * Verify that the contribution belongs to an article
     * owned by the authenticated user.
     */
    const contribution = await prisma.articleContribution.findFirst({
      where: {
        id: req.params.id,
        article: {
          authorId: req.userId,
        },
      },
      select: {
        id: true,
      },
    });

    if (!contribution) {
      return res.status(404).json({
        error: "Contribution not found",
      });
    }

    /**
     * Update moderation status.
     */
    const updated = await prisma.articleContribution.update({
      where: {
        id: contribution.id,
      },
      data: {
        approved,
        approvedAt: approved ? new Date() : null,
        approvedBy: approved ? req.userId : null,
      },
      select: {
        id: true,
        approved: true,
        approvedAt: true,
        approvedBy: true,
      },
    });

    return res.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    console.error("Error updating contribution:", error);

    return res.status(500).json({
      error: "Failed to update contribution",
    });
  }
});

/**
 * DELETE /:id
 *
 * Deletes a contribution belonging to one of the
 * authenticated user's articles.
 */
adminContributionsRouter.delete("/:id", async (req, res) => {
  try {
    /**
     * Verify ownership before deletion.
     */
    const contribution = await prisma.articleContribution.findFirst({
      where: {
        id: req.params.id,
        article: {
          authorId: req.userId,
        },
      },
      select: {
        id: true,
      },
    });

    if (!contribution) {
      return res.status(404).json({
        error: "Contribution not found",
      });
    }

    await prisma.articleContribution.delete({
      where: {
        id: contribution.id,
      },
    });

    return res.json({
      success: true,
      message: "Contribution deleted",
    });
  } catch (error) {
    console.error("Error deleting contribution:", error);

    return res.status(500).json({
      error: "Failed to delete contribution",
    });
  }
});
