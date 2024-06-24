"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsVolumeMuteFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

import { Button } from "@/components/ui/button";

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

export default function HomePage() {
	const [isMuted, setIsMuted] = useState<boolean>(true);
	const [activeTab, setActiveTab] = useState<number>(2);

	return (
		<>
			<div className="p-6 flex flex-col gap-6 w-full">
				<div className="w-full flex justify-between text-white">
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
						className="w-28 h-9"
					>
						<BsVolumeMuteFill fontSize={18} className="mr-1" />
						Unmute
					</Button>
				)}
			</div>
			<div className="fixed top-0 left-0 w-full h-[calc(100vh_-_64px)] z-[-1]">
				<VideoContainer
					src="/assets/home-vid.mp4"
					name="Mr. Do You Know?"
					caption="air fryer users are the worst people on earth 🤷‍♂️"
					tags={["#airfryer", "#comedy"]}
					music="original sound - Mr. Do You Know?"
					muted={isMuted}
				/>
			</div>
			<div className="fixed bottom-0 w-full">
				<Footer />
			</div>
		</>
	);
}
