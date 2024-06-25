"use client";

import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

import MomentsColumn from "../components/moments-column";

interface Card {
	title: string;
	id: string;
}

export default function PromptPage() {
	const [cards, setCards] = useState<Card[]>([]);
	return (
		<div className="bg-neutral-900 h-full">
			<div className="p-6 flex flex-col gap-6 w-full">
				<div className="w-full flex justify-between text-white">
					<BiChevronLeft fontSize={24} className="cursor-pointer" />
					<IoSearch fontSize={24} />
				</div>
			</div>
			<div className="flex flex-col items-center pt-10">
				<h1 className="text-2xl font-bold px-20 text-center text-white leading-8">
					Tell us crucial moments you want to include
				</h1>
			</div>
			<MomentsColumn cards={cards} setCards={setCards} />
		</div>
	);
}
