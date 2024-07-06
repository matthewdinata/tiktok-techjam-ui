/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from "next/image";
import { useState } from "react";
import { BiChevronRight, BiPlay } from "react-icons/bi";
import { BsMusicNote } from "react-icons/bs";
import { FaMusic } from "react-icons/fa6";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

const trendingMusics = [
	{
		id: 1,
		title: "Glimpse of Us",
		artist: "Joji",
		duration: "01:00",
		videos: "615.7K",
		imageUrl: "https://picsum.photos/200?random=1",
		string: "Glimpse of us - Joji",
	},
	{
		id: 2,
		title: "Spinning Monkeys",
		artist: "Kevin The Monkey",
		duration: "01:00",
		videos: "27.2M",
		imageUrl: "https://picsum.photos/200?random=2",
		string: "Spinning Monkeys - Kevin The Monkey",
	},
	{
		id: 3,
		title: "Aesthetic",
		artist: "Tollan Kim",
		duration: "02:14",
		videos: "1.7M",
		imageUrl: "https://picsum.photos/200?random=3",
		string: "Aesthetic - Tollan Kim",
	},
];

export default function AddMusic({
	music,
	setMusic,
}: {
	music: string | null;
	setMusic: (value: string | null) => void;
}) {
	const [openDialog, setOpenDialog] = useState(false);
	return (
		<Dialog open={openDialog} onOpenChange={setOpenDialog}>
			<DialogTrigger asChild>
				<div className="flex items-center justify-between p-2 cursor-pointer gap-4">
					<div className="flex items-center">
						<FaMusic className="mr-3" />
						<span className="whitespace-nowrap">Add music</span>
					</div>
					{music ? (
						<span className="text-ellipsis overflow-hidden whitespace-nowrap text-neutral-700 text-sm font-semibold">
							<BsMusicNote className="mr-1 inline-block" />
							{music}
						</span>
					) : (
						<BiChevronRight />
					)}
				</div>
			</DialogTrigger>
			<DialogContent className="w-full max-w-md h-max flex flex-col py-10 justify-between items-center bg-neutral-900 bg-opacity-80 text-white border-0">
				<DialogHeader className="flex flex-col items-center">
					<DialogTitle className="text-2xl">Add music</DialogTitle>
					<DialogDescription className="text-neutral-500">
						Select up to 1 item
					</DialogDescription>
				</DialogHeader>
				<div className="gap-4 w-full flex flex-col justify-center items-center">
					{trendingMusics.map((trendingMusic, index) => (
						<div
							key={trendingMusic.id}
							className="flex items-center bg-white p-2 rounded-lg gap-4 w-10/12 max-w-full cursor-pointer"
							onClick={() => {
								setMusic(trendingMusic.string);
								setOpenDialog(false);
							}}
						>
							<div className="relative w-16 h-16">
								<Image
									src={trendingMusic.imageUrl}
									alt={trendingMusic.title}
									className="w-full h-full object-cover rounded-md"
									width={100}
									height={100}
								/>
								<div className="absolute inset-0 flex items-center justify-center">
									<BiPlay fontSize={32} />
								</div>
								<div className="absolute top-0 left-0 bg-rose-600 text-white text-xs font-bold rounded-tl-md rounded-br-md px-1">
									{index + 1}
								</div>
							</div>
							<div className="flex-grow">
								<h3 className="font-bold text-black">
									{trendingMusic.title}
								</h3>
								<p className="text-gray-500 text-sm">
									{trendingMusic.artist}
								</p>
								<p className="text-gray-400 text-xs">
									{trendingMusic.duration} ·{" "}
									{trendingMusic.videos} videos
								</p>
							</div>
						</div>
					))}
				</div>
				<DialogFooter>
					<div
						onClick={() => {
							setMusic(null);
							setOpenDialog(false);
						}}
						className="text-white font-semibold text-sm hover:underline cursor-pointer"
					>
						Remove music
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
