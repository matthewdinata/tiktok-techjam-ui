"use client";

import { useState } from "react";
import { BsVolumeMuteFill } from "react-icons/bs";

import { Button } from "@/components/ui/button";

import Footer from "./components/footer";
import VideoContainer from "./components/video-container";

export default function HomePage() {
	const [isMuted, setIsMuted] = useState<boolean>(true);

	return (
		<>
			<div className="p-4 flex flex-col gap-4 w-full">
				{/* TODO: implement navbar */}
				<div className="w-full flex justify-between text-white">
					<span>1</span>
					<span>2</span>
					<span>3</span>
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
