"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type Session } from "next-auth";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import React, { useState } from "react";

type Props = {
	session: Session | null;
	children: React.ReactNode;
};
export default function Providers({ session, children }: Props) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<NextAuthSessionProvider session={session}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</NextAuthSessionProvider>
	);
}
