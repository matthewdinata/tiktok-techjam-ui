import { pgTable, text } from "drizzle-orm/pg-core";

import { users } from "./users";

const videos = pgTable("video", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	username: text("username").notNull(),
	caption: text("caption"),
	music: text("music"),
	videoUrl: text("videoUrl").notNull(),
	userId: text("userId")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
});

export default videos;
