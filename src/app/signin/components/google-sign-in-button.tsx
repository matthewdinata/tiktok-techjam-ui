"use client";

import { Button } from "@/components/ui/button";

export default function GoogleSignInButton({ signIn }: { signIn: () => void }) {
	return (
		<Button variant="outline" onClick={() => signIn()}>
			Sign in with Google
		</Button>
	);
}
