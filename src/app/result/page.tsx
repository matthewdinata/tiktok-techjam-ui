"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
	BiChevronLeft,
	BiCircle,
	BiFolder,
	BiLock,
	BiSolidSticker,
} from "react-icons/bi";
import { IoMusicalNotes } from "react-icons/io5";

import { Button } from "@/components/ui/button";

function EditVideoButtons() {
	return (
		<div className="flex flex-col text-white gap-4 text-[10px] font-medium items-center w-10 mr-2">
			<div className="flex flex-col items-center">
				<BiFolder fontSize={32} />
				<span>Drafts</span>
			</div>
			<div className="flex flex-col items-center">
				<BiSolidSticker fontSize={32} />
				<span>Stickers</span>
			</div>
			<div className="flex flex-col items-center">
				<BiCircle fontSize={32} />
				<span>Background</span>
			</div>
			<div className="flex flex-col items-center">
				<BiLock fontSize={32} />
				<span className="text-center">Privacy Settings</span>
			</div>
		</div>
	);
}

export default function ResultPage() {
	const router = useRouter();
	return (
		<div className="flex flex-col h-screen w-screen items-center justify-center bg-neutral-900 gap-5 py-10">
			<div className="text-white bg-neutral-800 bg-opacity-90 p-2 px-3 rounded-2xl flex gap-2 items-center fixed z-50 top-10">
				<IoMusicalNotes fontSize={20} />
				Add sound
			</div>
			<div className="fixed top-10 flex w-full px-2 justify-between items-start">
				<Link href="/" className="text-white">
					<BiChevronLeft fontSize={40} className="cursor-pointer" />
				</Link>
				<EditVideoButtons />
			</div>

			<video src="/assets/home-vid.mp4" autoPlay muted playsInline loop />

			<div className="fixed bottom-5 grid grid-cols-2 justify-center space-x-4 w-11/12">
				<Button variant="secondary" size="lg">
					Regenerate
				</Button>
				<Button
					className="bg-rose-600 focus:bg-rose-700"
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
