"use client";

import Spinner from "@/components/icons";

export default function Loading() {
	return (
		<div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center gap-10">
			<Spinner className="h-36 w-36" />
			<span className="text-lg font-semibold text-white">
				Hold on, we&apos;re getting your videos...
			</span>
		</div>
	);
}
