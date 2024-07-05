import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "TikTok TechJam 2024",
	description: "Embracing Creativity with Generative AI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* Set height to screen height for mobile-first design */}
				<div className="h-screen w-screen bg-neutral-800">
					<div className="max-w-md w-full h-full mx-auto bg-neutral-900 relative">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
