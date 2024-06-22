import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthConfig } from "next-auth";

import db from "@/db";

export default {
	adapter: DrizzleAdapter(db),
	providers: [],
	callbacks: {
		async session({ session, user }) {
			const updatedSession = session;
			updatedSession.user.id = user.id;

			return updatedSession;
		},
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;

			if (!isLoggedIn) {
				const redirectUrl = new URL("api/auth/signin", nextUrl.origin);
				redirectUrl.searchParams.append("callbackUrl", nextUrl.href);
				return Response.redirect(redirectUrl);
			}
			return true;
		},
	},
} satisfies NextAuthConfig;
