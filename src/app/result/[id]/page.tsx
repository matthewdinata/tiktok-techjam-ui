"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { IoMusicalNotes } from "react-icons/io5";

import { useHighlightResults } from "@/hooks/use-highlights";

import { Button } from "@/components/ui/button";

import ActionButtons from "../components/action-buttons";

export default function ResultPage() {
	const router = useRouter();
	const [isMuted, setIsMuted] = useState<boolean>(true);
	const params = useParams<{ id: string }>();

	const { data: result } = useHighlightResults(params.id);

	const toggleIsMuted = () => {
		setIsMuted(!isMuted);
	};

	return (
		<div className="flex flex-col h-full w-full items-center justify-center bg-neutral-900 gap-5 py-10">
			<div className="text-white bg-neutral-800 bg-opacity-90 p-2 px-3 rounded-2xl flex gap-2 items-center fixed top-10">
				<IoMusicalNotes fontSize={20} />
				Add sound
			</div>
			<div className="fixed top-10 w-full flex justify-between items-start px-2 max-w-md z-10">
				<Link href="/" className="text-white">
					<BiChevronLeft fontSize={40} className="cursor-pointer" />
				</Link>

				<ActionButtons
					isMuted={isMuted}
					toggleIsMuted={toggleIsMuted}
				/>
			</div>

			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<video
				src={result?.videoUrl}
				autoPlay
				muted={isMuted}
				playsInline
				loop
			/>

			<div className="fixed bottom-5 grid grid-cols-2 justify-center space-x-4 w-full px-4 max-w-[26rem]">
				<Button
					variant="secondary"
					size="lg"
					className="bg-slate-100 hover:bg-rose-200 focus:bg-rose-200"
				>
					Regenerate
				</Button>
				<Button
					className="bg-rose-600 hover:bg-rose-700 focus:bg-rose-700"
					size="lg"
					onClick={() => {
						router.push("/result/edit");
					}}
				>
					Next
				</Button>
			</div>
		</div>
	);
}