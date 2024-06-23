"use client";

import { useState } from "react";
import { BsVolumeMuteFill } from "react-icons/bs";
import { HiMusicNote } from "react-icons/hi";

import { Button } from "@/components/ui/button";

type VideoContainerProps = {
	src: string;
	name: string;
	caption: string;
	tags?: string[];
	music?: string;
};

export default function VideoContainer({
	src,
	name,
	caption,
	tags,
	music,
}: VideoContainerProps) {
	const [isMuted, setIsMuted] = useState<boolean>(true);
	return (
		<div className="w-full h-full relative p-4 flex flex-col justify-between">
			{/* eslint-disable-next-line */}
			<video
				src={src}
				className="z-[-1] w-full absolute top-0 left-0"
				// TODO: uncomment autoPlay
				// autoPlay
				muted={isMuted}
				playsInline
				loop
			/>
			{isMuted ? (
				<Button
					onClick={() => setIsMuted(false)}
					variant="outline"
					className="w-28"
				>
					<BsVolumeMuteFill fontSize={18} className="mr-1" />
					Unmute
				</Button>
			) : (
				<></>
			)}
			<div className="text-white max-w-[70%] flex flex-col gap-1">
				<div className="font-medium text-base text-[1.05rem]">
					{name}
				</div>
				<div className="font-light leading-5">
					{caption}{" "}
					{tags?.map((tag, idx) => (
						<span key={idx} className="font-medium">
							{tag}{" "}
						</span>
					))}
				</div>
				{music && (
					<div className="flex items-center mt-1">
						<HiMusicNote fontSize={16} className="mr-2" />
						<span className="text-ellipsis overflow-hidden whitespace-nowrap">
							{music}
						</span>
					</div>
				)}
			</div>
		</div>
	);
}
