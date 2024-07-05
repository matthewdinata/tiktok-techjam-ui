import { useEffect } from "react";
import { FaCommentDots } from "react-icons/fa6";
import { HiMusicNote } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { RiShareForwardFill } from "react-icons/ri";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import Caption from "./caption";

function VideoActionButtons() {
	return (
		<div className="flex flex-col text-white font-medium gap-4 text-sm shadow-sm items-center">
			<Avatar className="mb-2 w-9 h-9">
				<AvatarFallback>
					<IoMdPerson fontSize={24} className="text-neutral-300" />
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
	id: string;
	src: string;
	name: string;
	caption: string;
	music?: string;
	muted: boolean;
};

export default function VideoContainer({
	id,
	src,
	name,
	caption,
	music,
	muted,
}: VideoContainerProps) {
	useEffect(() => {
		const video = document.getElementById(
			`video-${id}`
		) as HTMLVideoElement;
		const postMainElement = document.getElementById(`VideoContainer-${id}`);

		if (postMainElement) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) video.play();
					else video.pause();
				},
				{ threshold: [0.6] }
			);

			observer.observe(postMainElement);
		}
	}, [id]);

	return (
		<div
			id={`VideoContainer-${id}`}
			className="relative flex flex-col h-[calc(100dvh_-_64px)]"
		>
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<video
				id={`video-${id}`}
				src={src}
				className="h-full"
				autoPlay
				muted={muted}
				playsInline
				loop
			/>
			<div className="absolute bottom-[15%] right-3">
				<VideoActionButtons />
			</div>
			<div className="text-white max-w-[70%] flex flex-col gap-1 absolute bottom-5 left-4">
				<div className="font-medium text-base text-[1.05rem]">
					{name}
				</div>
				<Caption text={caption} />
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
