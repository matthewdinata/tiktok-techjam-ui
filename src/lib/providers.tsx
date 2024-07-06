"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type Session } from "next-auth";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import React, { useMemo, useState } from "react";

import { FileContext } from "./context";

type Props = {
	session: Session | null;
	children: React.ReactNode;
};

export default function Providers({ session, children }: Props) {
	const [queryClient] = useState(() => new QueryClient());
	const [file, setFile] = useState<File | null>(null);

	const contextValue = useMemo(() => ({ file, setFile }), [file]);
	return (
		<NextAuthSessionProvider session={session}>
			<QueryClientProvider client={queryClient}>
				<FileContext.Provider value={contextValue}>
					{children}
				</FileContext.Provider>
			</QueryClientProvider>
		</NextAuthSessionProvider>
	);
}
