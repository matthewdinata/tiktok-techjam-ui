"use client";

import { signOut } from "next-auth/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsVolumeMuteFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

import { useHighlightRecent } from "@/hooks/use-highlights";
import { useUserVideos, useVideos } from "@/hooks/use-videos";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import Footer from "../components/footer";
import Loading from "../components/loading";
import TaskStatus from "../components/task-status";
import VideoContainer from "../components/video-container";

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

const getTab = (tab: string | undefined) => {
	if (tab === "uploads") return 1;
	return 2;
};

export default function HomePage() {
	const { tab: tabParam } = useParams<{ tab: string }>();
	const [isMuted, setIsMuted] = useState<boolean>(true);
	const [activeTab, setActiveTab] = useState<number>(
		() => getTab(tabParam) || 2
	);

	const { data: recentTask } = useHighlightRecent();
	const { data: forYouVideos, isLoading: forYouLoading } = useVideos();
	const { data: uploadsVideos, isLoading: uploadsLoading } = useUserVideos();

	const videos = activeTab === 1 ? uploadsVideos : forYouVideos;
	if (uploadsLoading || forYouLoading || !videos) return <Loading />;

	return (
		<>
			<div className="flex flex-col w-full h-full pb-16">
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
					<div className="flex justify-between">
						{isMuted && (
							<Button
								onClick={() => setIsMuted(false)}
								variant="outline"
								className="w-28 h-9 text-neutral-900 font-semibold"
							>
								<BsVolumeMuteFill
									fontSize={18}
									className="mr-1"
								/>
								Unmute
							</Button>
						)}
						{recentTask && <TaskStatus taskId={recentTask.id} />}
					</div>
				</div>
				{videos.length > 0 ? (
					<Carousel
						opts={{
							align: "start",
						}}
						orientation="vertical"
						key={activeTab}
					>
						<CarouselContent className="h-dvh mt-0 relative">
							{videos.map((video) => (
								<CarouselItem
									key={video.id}
									className="h-dvh pt-0"
								>
									<VideoContainer
										key={video.id}
										id={video.id}
										src={video.videoUrl}
										name={video.name}
										caption={video.caption}
										music={video.music}
										muted={isMuted}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				) : (
					<div className="flex items-center justify-center h-full">
						<p className="text-white text-lg">
							No videos uploaded yet :(
						</p>
					</div>
				)}
			</div>
			<div className="fixed max-w-md bottom-0 w-full">
				<Footer />
			</div>
		</>
	);
}
