"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsVolumeMuteFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import Footer from "./components/footer";
import VideoContainer from "./components/video-container";

const tabs = [
	{
		id: 1,
		name: "Uploads",
	},
	{
		id: 2,
		name: "For You",
	},
];

const forYouVideos = [
	{
		id: "1",
		src: "/assets/home-vid.mp4",
		name: "Mr. Do You Know?",
		caption: "air fryer users are the worst people on earth 🤷‍♂️",
		tags: ["#airfryer", "#comedy"],
		music: "original sound - Mr. Do You Know?",
	},
	{
		id: "2",
		src: "/assets/home-vid2.mp4",
		name: "Under Paris",
		caption: "we are fully prepared for the zombie apocalypse",
		tags: ["#paris", "#shark"],
		music: "original sound - Mr. Do You Know?",
	},
];

const uploadsVideos = [
	{
		id: "4",
		src: "/assets/home-vid2.mp4",
		name: "Under Paris",
		caption: "we are fully prepared for the zombie apocalypse",
		tags: ["#paris", "#shark"],
		music: "original sound - Mr. Do You Know?",
	},
	{
		id: "3",
		src: "/assets/home-vid.mp4",
		name: "Mr. Do You Know?",
		caption: "air fryer users are the worst people on earth 🤷‍♂️",
		tags: ["#airfryer", "#comedy"],
		music: "original sound - Mr. Do You Know?",
	},
];

export default function HomePage() {
	const [isMuted, setIsMuted] = useState<boolean>(true);
	const [activeTab, setActiveTab] = useState<number>(2);

	const videos = activeTab === 1 ? uploadsVideos : forYouVideos;

	return (
		<>
			<div className="flex flex-col w-full overflow-scroll pb-16">
				<div className="w-full flex flex-col text-white px-4 fixed max-w-md top-5 z-20 gap-4">
					<div className="flex justify-between">
						<BiLogOut
							fontSize={24}
							className="cursor-pointer"
							onClick={async () => {
								await signOut();
							}}
						/>
						<div className="flex gap-4 items-center">
							{tabs.map((tab) => (
								<span
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									onKeyDown={() => setActiveTab(tab.id)}
									tabIndex={tab.id}
									role="button"
									className={`transition-all ${activeTab === tab.id ? "font-medium text-white text-lg" : "text-neutral-100 text-[1.05rem]"}`}
								>
									{tab.name}
								</span>
							))}
						</div>
						<IoSearch fontSize={24} />
					</div>
					{isMuted && (
						<Button
							onClick={() => setIsMuted(false)}
							variant="outline"
							className="w-28 h-9 text-neutral-900"
						>
							<BsVolumeMuteFill fontSize={18} className="mr-1" />
							Unmute
						</Button>
					)}
				</div>
				<Carousel
					opts={{
						align: "start",
					}}
					orientation="vertical"
				>
					<CarouselContent className="h-dvh mt-0 relative">
						{videos.map((video) => (
							<CarouselItem key={video.id} className="h-dvh pt-0">
								<VideoContainer
									key={video.id}
									id={video.id}
									src={video.src}
									name={video.name}
									caption={video.caption}
									tags={video.tags}
									music={video.music}
									muted={isMuted}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
			<div className="fixed max-w-md bottom-0 w-full">
				<Footer />
			</div>
		</>
	);
}
