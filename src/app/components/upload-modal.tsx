import Image from "next/image";
import { ChangeEvent, useRef } from "react";
import { FaPlus } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export default function UploadModal() {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			// const [file] = event.target.files;
			// TODO: POST req to handle file upload
			// console.log(file);
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="bg-white px-2 py-1 mb-1 rounded-md text-black shadow-[-5px_0_0_cyan,5px_0_0_#FF0066] cursor-pointer">
					<FaPlus fontSize={18} />
				</div>
			</DialogTrigger>
			<DialogContent className="w-full h-full flex flex-col justify-between items-center bg-neutral-950 text-white border-black">
				<DialogHeader className="mt-10 flex flex-col items-center">
					<DialogTitle className="text-2xl">
						TikTok Creator Template
					</DialogTitle>
					<DialogDescription>Select up to 1 item</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-6 items-center">
					<div className="flex flex-col items-center gap-3">
						<div className="w-64 border-neutral-800 border-2 rounded-md">
							<Image
								src="/assets/highlights-poster.jpg"
								width={500}
								height={500}
								alt="Highlights poster"
								className="w-full h-auto rounded-md"
							/>
						</div>
						<span className="text-xs text-neutral-300 font-medium">
							by TikTok
						</span>
					</div>
					<input
						type="file"
						accept="video/*"
						className="hidden"
						ref={inputRef}
						onChange={handleFileChange}
					/>
					<Button
						className="rounded-full bg-red-500 w-64 hover:bg-red-600 transition-all"
						onClick={() => inputRef.current?.click()}
					>
						Upload video
					</Button>
				</div>
				<DialogFooter className="sm:justify-start">
					<div className="flex flex-col items-center w-full font-medium leading-[.95rem] text-sm">
						<div>Templates</div>
						<div>•</div>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
