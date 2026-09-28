CREATE TABLE "article_contributions" (
  "id" TEXT NOT NULL,
  "articleId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "approved" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "approvedAt" TIMESTAMP(3),
  "approvedBy" TEXT,

  CONSTRAINT "article_contributions_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "article_contributions_articleId_idx"
  ON "article_contributions"("articleId");
CREATE INDEX "article_contributions_approved_idx"
  ON "article_contributions"("approved");
CREATE INDEX "article_contributions_createdAt_idx"
  ON "article_contributions"("createdAt");

ALTER TABLE "article_contributions"
  ADD CONSTRAINT "article_contributions_articleId_fkey"
  FOREIGN KEY ("articleId") REFERENCES "articles"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "article_contributions"
  ADD CONSTRAINT "article_contributions_approvedBy_fkey"
  FOREIGN KEY ("approvedBy") REFERENCES "users"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;