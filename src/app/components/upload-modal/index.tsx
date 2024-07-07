import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";

import { useHighlightRecent } from "@/hooks/use-highlights";
import { useFile } from "@/lib/context";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import DisabledUploadButton from "./disabled-upload-button";
import DurationAlert from "./duration-alert";
import TemplateContainer from "./template-container";
import checkValidVideoDuration from "./utils";

function TikTokHighlightsButton() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { setFile } = useFile();
	const router = useRouter();

	const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true);
		const [file] = event.target.files ?? [];
		if (file) {
			if (await checkValidVideoDuration(file)) {
				setFile(file);
				router.push("/prompt");
			} else {
				setIsAlertOpen(true);
			}
		}
		setIsLoading(false);
	};

	return (
		<>
			<DurationAlert open={isAlertOpen} onOpenChange={setIsAlertOpen} />

			<input
				type="file"
				accept="video/*"
				className="hidden"
				ref={inputRef}
				onChange={handleFileChange}
			/>
			<Button
				className="rounded-full bg-rose-600 w-64 hover:bg-rose-700 transition-all"
				onClick={() => inputRef.current?.click()}
				disabled={isLoading}
			>
				{isLoading && (
					<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
				)}
				Upload video
			</Button>
		</>
	);
}

export default function UploadModal() {
	const { data: recentTask } = useHighlightRecent();
	const isProcessing =
		recentTask?.status === "PROCESSING" || recentTask?.status === "DONE";
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<div className="bg-white px-2 py-1 mb-1 rounded-md text-black shadow-[-5px_0_0_cyan,5px_0_0_#FF0066] cursor-pointer">
						<FaPlus fontSize={18} />
					</div>
				</DialogTrigger>
				<DialogContent className="w-full max-w-md h-dvh flex flex-col py-10 justify-between items-center bg-neutral-950 text-white border-black">
					<DialogHeader className="flex flex-col items-center">
						<DialogTitle className="text-2xl">
							TikTok Creator Template
						</DialogTitle>
						<DialogDescription>
							Select up to 1 item
						</DialogDescription>
					</DialogHeader>
					<Carousel className="w-full max-w-64">
						<CarouselContent>
							<CarouselItem>
								<TemplateContainer
									title="Highlights"
									posterSrc="/assets/highlights-poster.jpg"
									posterAlt="Highlights poster"
									creator="TikTok"
									buttonComponent={
										isProcessing ? (
											<DisabledUploadButton />
										) : (
											<TikTokHighlightsButton />
										)
									}
								/>
							</CarouselItem>
							<CarouselItem>
								<TemplateContainer
									title="Jokerify"
									posterSrc="/assets/jokerify-poster.jpg"
									posterAlt="Jokerify poster"
									creator="Rasmus"
									buttonComponent={
										<Button
											className="rounded-full bg-rose-600 w-64 hover:bg-rose-700 transition-all"
											disabled
										>
											Upload video
										</Button>
									}
								/>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious className="focus-visible:ring-neutral-300 border-neutral-800 bg-neutral-950 hover:bg-neutral-800 hover:text-neutral-50" />
						<CarouselNext className="focus-visible:ring-neutral-300 border-neutral-800 bg-neutral-950 hover:bg-neutral-800 hover:text-neutral-50" />
					</Carousel>

					<DialogFooter className="sm:justify-start mt-6">
						<div className="flex flex-col items-center w-full font-medium leading-[.95rem] text-sm">
							<div>Templates</div>
							<div>•</div>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
