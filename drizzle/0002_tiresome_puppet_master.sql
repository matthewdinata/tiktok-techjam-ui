ALTER TABLE "video" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "video" DROP COLUMN IF EXISTS "username";