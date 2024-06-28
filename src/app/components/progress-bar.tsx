"use client";

import { useEffect, useState } from "react";

import Progress from "@/components/ui/progress";

export default function ProgressBar() {
	const [progress, setProgress] = useState(13);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="h-screen bg-neutral-900 flex flex-col items-center justify-center gap-5">
			<div className="flex space-x-1 justify-center items-center flex-col">
				<span className="text-xl font-semibold text-white">
					Processing your highlight video
				</span>
				<span className="text-sm text-white">
					We&apos;re compiling the best clips from your video
				</span>
			</div>
			<Progress value={progress} className="w-[60%] bg-white" />
		</div>
	);
}
