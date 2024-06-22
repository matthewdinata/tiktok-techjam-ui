import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import db from "@/db";

export const { handlers, auth } = NextAuth({
	providers: [Google],
	adapter: DrizzleAdapter(db),
	callbacks: {
		async session({ session, user }) {
			const updatedSession = session;
			updatedSession.user.id = user.id;

			return updatedSession;
		},
	},
});
