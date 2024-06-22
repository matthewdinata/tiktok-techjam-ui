import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({
	path: ".env.local",
});

export default defineConfig({
	dialect: "postgresql",
	schema: "./src/db/schema/*",
	out: "./drizzle",
	dbCredentials: {
		url: String(process.env.DB_URL),
	},
});
