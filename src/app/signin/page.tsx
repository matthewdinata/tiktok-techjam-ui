import Image from "next/image";

import { signIn } from "@/auth";

import GoogleSignInButton from "./components/google-sign-in-button";

export default function SigninPage() {
	return (
		<div className="flex h-screen w-screen items-center justify-center bg-neutral-900 px-6">
			<div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-neutral-800 shadow-lg">
				<div className="flex flex-col items-center justify-center space-y-3 border-b border-neutral-800 bg-neutral-800 px-4 py-16 text-center sm:px-16 gap-8">
					<Image
						src="/assets/tiktok-logo.png"
						alt="logo"
						width="64"
						height="64"
						className="invert"
					/>

					<GoogleSignInButton
						signIn={async () => {
							"use server";

							await signIn("google", { redirectTo: "/" });
						}}
					/>
				</div>
			</div>
		</div>
	);
}
