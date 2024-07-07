"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Lottie from "react-lottie";

import * as animationData from "../movie-animation.json";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

export default function ProgressPage() {
	const router = useRouter();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			router.push("/fyp");
		}, 5000);

		return () => clearTimeout(timeoutId);
	}, [router]);

	return (
		<div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center pb-20 pt-60">
			<Lottie options={defaultOptions} height={300} width={300} />
			<span className="text-lg font-semibold text-white">
				Processing your highlight video
			</span>

			<span className="text-sm font-normal text-neutral-400 mx-7 text-center mt-auto">
				This process may take a few minutes.
				<br />
				Redirecting to home page...
			</span>
		</div>
	);
}
