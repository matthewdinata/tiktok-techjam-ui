"use client";

import Link from "next/link";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

import { useUploadHighlight } from "@/hooks/use-highlights";
import { useFile } from "@/lib/context";

import { Button } from "@/components/ui/button";

import MomentsColumn, { type Card } from "./components/moments-column";

export default function PromptPage() {
	const [cards, setCards] = useState<Card[]>([]);
	const uploadMutation = useUploadHighlight();
	const { file } = useFile();

	const handleUpload = () => {
		if (!file) return;
		uploadMutation.mutate({
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
			<div className="fixed bottom-10 w-full flex justify-center max-w-md">
				<Button
					className={`bg-rose-600 hover:bg-rose-700 focus:bg-rose-700 w-4/5 mt-5 ${cards.length === 0 ? "hidden" : ""}`}
					onClick={handleUpload}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
