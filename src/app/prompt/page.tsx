"use client";

import Link from "next/link";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

import { Button } from "@/components/ui/button";

import MomentsColumn, { type Card } from "./components/moments-column";

export default function PromptPage() {
	const [cards, setCards] = useState<Card[]>([]);
	return (
		<div className="bg-neutral-900 h-max flex flex-col min-h-full pb-20">
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
			<div className="fixed bottom-4 w-full flex justify-center">
				<Button
					className={`bg-rose-600 hover:bg-rose-700 focus:bg-rose-700 w-4/5 mt-5 ${cards.length === 0 ? "hidden" : ""}`}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
