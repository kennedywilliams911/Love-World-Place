ALTER TABLE "article_contributions"
  ADD COLUMN "browserId" TEXT;

CREATE UNIQUE INDEX "article_contributions_articleId_browserId_key"
  ON "article_contributions"("articleId", "browserId");