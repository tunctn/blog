CREATE TABLE "kv_store" (
	"key" text PRIMARY KEY NOT NULL,
	"value" jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"expires_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "post_views" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone,
	"post_slug" text NOT NULL,
	"country_code" text NOT NULL,
	"referer" text
);
--> statement-breakpoint
CREATE TABLE "kv_cleanup" (
	"cleaned_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "key_index" ON "kv_store" USING btree ("key");--> statement-breakpoint
CREATE INDEX "post_slug_index" ON "post_views" USING btree ("post_slug");--> statement-breakpoint
CREATE INDEX "country_code_index" ON "post_views" USING btree ("country_code");--> statement-breakpoint
CREATE INDEX "cleaned_at_index" ON "kv_cleanup" USING btree ("cleaned_at");