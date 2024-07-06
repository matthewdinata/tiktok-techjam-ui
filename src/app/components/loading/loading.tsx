"use client";

import Lottie from "react-lottie";

import * as animationData from "./loading-animation.json";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

export default function Loading() {
	return (
		<div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center pb-20">
			<Lottie options={defaultOptions} height={300} width={300} />
			<span className="text-lg font-semibold text-white">
				Hold on, we&apos;re getting your videos...
			</span>
		</div>
	);
}
