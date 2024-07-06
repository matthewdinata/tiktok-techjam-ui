"use client";

import { useParams } from "next/navigation";
import Lottie from "react-lottie";

import Progress from "@/components/ui/progress";

import { useHighlightStatus } from "../../../hooks/use-highlights";
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
	const params = useParams<{ id: string }>();
	const { data: progress } = useHighlightStatus(params.id);

	return (
		<div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center pb-20">
			<Lottie options={defaultOptions} height={300} width={300} />
			<span className="text-lg font-semibold text-white">
				Processing your highlight video
			</span>
			<Progress value={progress} className="w-[60%] mt-2 bg-white" />
		</div>
	);
}
