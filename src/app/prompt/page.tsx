"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

import { useUploadHighlight } from "@/hooks/use-highlights";
import { useFile } from "@/lib/context";

import { Button } from "@/components/ui/button";

import MomentsColumn, { type Card } from "./components/moments-column";

export default function PromptPage() {
	const [cards, setCards] = useState<Card[]>([]);
	const { mutate, isPending } = useUploadHighlight();
	const { file } = useFile();

	const handleUpload = () => {
		if (!file) return;
		mutate({
			file,
			prompt: [...cards.map((card) => card.title)],
		});
	};
	return (
		<div className="bg-neutral-900 h-full flex flex-col pb-20 no-scrollbar overflow-y-auto">
			<div className="p-6 flex flex-col gap-6 w-full">
				<Link href="/" className="w-full flex text-white">
					<BiChevronLeft fontSize={24} className="cursor-pointer" />
				</Link>
			</div>
			<div className="flex flex-col items-center mt-2">
				<h1 className="text-2xl font-bold px-10 text-center text-white leading-8">
					Tell us crucial moments you want to include
				</h1>
			</div>
			<MomentsColumn cards={cards} setCards={setCards} />
			<div className="fixed bottom-10 w-full flex justify-center  items-center max-w-md flex-col">
				{isPending && (
					<p className="text-sm font-normal text-neutral-400 mx-7 text-center mb-1">
						Please hold on for a few moments. Your video is being
						uploaded! ⏳
					</p>
				)}
				<Button
					className={`bg-rose-600 hover:bg-rose-700 focus:bg-rose-700 w-4/5 mt-5 ${cards.length === 0 ? "hidden" : ""}`}
					onClick={handleUpload}
					disabled={isPending}
				>
					{isPending && (
						<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
					)}
					Next
				</Button>
			</div>
		</div>
	);
}
