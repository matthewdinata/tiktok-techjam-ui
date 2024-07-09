"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
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
	const { id } = useParams<{ id: string }>();
	const { data: progress } = useHighlightStatus(id);
	const router = useRouter();

	useEffect(() => {
		if (progress === 100) {
			router.push(`/result/${id}`);
		}
	}, [progress, id, router]);

	return (
		<div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center pb-20">
			<Lottie options={defaultOptions} height={300} width={300} />
			<span className="text-lg font-semibold text-white">
				Processing your highlight video
			</span>
			<Progress
				value={Math.max(Number(progress), 30)}
				className="w-[60%] mt-2 bg-white"
			/>
		</div>
	);
}
