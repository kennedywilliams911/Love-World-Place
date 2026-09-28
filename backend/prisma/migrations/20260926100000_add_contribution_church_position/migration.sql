ALTER TABLE "article_contributions"
  ADD COLUMN "church" TEXT,
  ADD COLUMN "position" TEXT;

UPDATE "article_contributions"
SET "church" = '', "position" = '';

ALTER TABLE "article_contributions"
  ALTER COLUMN "church" SET NOT NULL,
  ALTER COLUMN "position" SET NOT NULL,
  ALTER COLUMN "email" DROP NOT NULL;