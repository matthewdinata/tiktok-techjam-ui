import Link from "next/link";
import {
	BiChevronLeft,
	BiCircle,
	BiFolder,
	BiLock,
	BiSolidSticker,
	BiText,
	BiUpload,
} from "react-icons/bi";
import { MdReplay } from "react-icons/md";

import { Button } from "@/components/ui/button";

function EditVideoButtons() {
	return (
		<div className="flex flex-col text-white gap-4 text-[10px] font-medium shadow-md items-center w-10 mr-2">
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
				<span>Privacy Settings</span>
			</div>
		</div>
	);
}

export default function ResultPage() {
	return (
		<div className="flex flex-col h-screen w-screen items-center justify-center bg-neutral-900 gap-5 py-10">
			<div className="fixed top-10 flex w-full px-2 justify-between items-start">
				<Link href="/" className="text-white">
					<BiChevronLeft fontSize={40} className="cursor-pointer" />
				</Link>
				<div className="text-white bg-neutral-800 bg-opacity-90 p-2 px-3 rounded-2xl flex gap-2 items-center">
					<BiText fontSize={20} />
					Add caption
				</div>
				<EditVideoButtons />
			</div>

			<video src="/assets/home-vid.mp4" autoPlay muted playsInline loop />

			<div className="fixed bottom-10 flex justify-center gap-5">
				<Button variant="secondary">
					<MdReplay fontSize={20} className="mr-3" />
					Regenerate
				</Button>
				<Button className="bg-rose-600">
					<BiUpload fontSize={20} className="mr-3" />
					Post to feed
				</Button>
			</div>
		</div>
	);
}
