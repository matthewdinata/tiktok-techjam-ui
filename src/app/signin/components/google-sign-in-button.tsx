"use client";

import { Button } from "@/components/ui/button";

export default function GoogleSignInButton({ signIn }: { signIn: () => void }) {
	return (
		<Button
			variant="outline"
			className="bg-transparent text-gray-200 hover:bg-transparent hover:text-cyan-200 hover:border-cyan-200 "
			onClick={() => signIn()}
		>
			Sign in with Google
		</Button>
	);
}
