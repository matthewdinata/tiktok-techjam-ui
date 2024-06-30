"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie";

import Progress from "@/components/ui/progress";

import * as animationData from "./movie-animation.json";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

export default function ProgressPage() {
	const [progress, setProgress] = useState(13);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="h-screen bg-neutral-900 flex flex-col items-center justify-center pb-20">
			<Lottie options={defaultOptions} height={300} width={300} />
			<span className="text-lg font-semibold text-white">
				Processing your highlight video
			</span>
			<Progress value={progress} className="w-[60%] mt-2 bg-white" />
		</div>
	);
}
