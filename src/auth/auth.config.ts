import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthConfig } from "next-auth";

import db from "@/db";

export default {
	adapter: DrizzleAdapter(db),
	providers: [],
	pages: {
		signIn: "/signin",
	},
	callbacks: {
		async session({ session, user }) {
			const updatedSession = session;
			updatedSession.user.id = user.id;

			return updatedSession;
		},
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;

			if (!isLoggedIn) {
				const redirectUrl = new URL("signin", nextUrl.origin);

				return Response.redirect(redirectUrl);
			}
			return true;
		},
	},
} satisfies NextAuthConfig;
