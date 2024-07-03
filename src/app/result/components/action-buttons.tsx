"use client";

import { BiCircle, BiFolder, BiLock, BiSolidSticker } from "react-icons/bi";
import { BsVolumeMuteFill, BsVolumeUpFill } from "react-icons/bs";

import { Button } from "@/components/ui/button";

export default function ActionButtons({
	isMuted,
	toggleIsMuted,
}: {
	isMuted: boolean;
	toggleIsMuted: () => void;
}) {
	return (
		<div className="flex flex-col text-white gap-4 text-[10px] font-medium items-center w-10 mr-2 z-10">
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
			<Button
				className="flex flex-col items-center text-[10px] focus:bg-transparent hover:bg-transparent hover:text-white text-white focus:text-white"
				onClick={toggleIsMuted}
				size="lg"
				variant="ghost"
			>
				{isMuted ? (
					<>
						<BsVolumeUpFill fontSize={32} />
						<span className="text-center">Unmute</span>
					</>
				) : (
					<>
						<BsVolumeMuteFill fontSize={32} />
						<span className="text-center">Mute</span>
					</>
				)}
			</Button>
		</div>
	);
}
