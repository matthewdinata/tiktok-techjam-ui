"use client";

import { useState } from "react";
import { BsVolumeMuteFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa6";
import { HiMusicNote } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { RiShareForwardFill } from "react-icons/ri";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function VideoActionButtons() {
	return (
		<div className="flex flex-col text-white font-medium gap-4 text-sm shadow-sm items-center">
			<Avatar className="mb-2 w-9 h-9">
				<AvatarFallback>
					<IoMdPerson fontSize={24} className="text-gray-300" />
				</AvatarFallback>
			</Avatar>
			<div className="flex flex-col items-center">
				<IoHeart fontSize={36} />
				<span>81.2K</span>
			</div>
			<div className="flex flex-col items-center">
				<FaCommentDots fontSize={32} />
				<span>319</span>
			</div>
			<div className="flex flex-col items-center">
				<RiShareForwardFill fontSize={36} />
				<span>185</span>
			</div>
		</div>
	);
}

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
		<div
			className={`w-full h-full relative p-4 flex flex-col  ${isMuted ? "justify-between" : "justify-end"}`}
		>
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
			<div className="absolute bottom-[15%] right-3">
				<VideoActionButtons />
			</div>
			{isMuted && (
				<Button
					onClick={() => setIsMuted(false)}
					variant="outline"
					className="w-28"
				>
					<BsVolumeMuteFill fontSize={18} className="mr-1" />
					Unmute
				</Button>
			)}
			<div className="text-white max-w-[70%] flex flex-col gap-1 ">
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
