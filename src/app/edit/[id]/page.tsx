"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiBox, BiChevronLeft, BiUpload } from "react-icons/bi";

import { useHighlightPost, useHighlightResults } from "@/hooks/use-highlights";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import EditItems from "../components/edit-items";
import captureVideoFrame from "../utils";

export default function EditPage() {
	const [description, setDescription] = useState<string>("");
	const [coverImage, setCoverImage] = useState<string | null>(null);
	const [music, setMusic] = useState<string | null>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const { id } = useParams<{ id: string }>();

	const { data: result } = useHighlightResults(id);
	const { mutate: postVideo } = useHighlightPost(id);

	useEffect(() => {
		if (videoRef.current && result) {
			videoRef.current.src = result.output_url;
			videoRef.current.setAttribute("crossorigin", "anonymous");
			videoRef.current.onloadedmetadata = () => {
				videoRef.current!.currentTime = 5; // Move slightly past the first frame
			};

			videoRef.current.onseeked = () => {
				setTimeout(() => {
					const imageUrl = captureVideoFrame(videoRef);
					setCoverImage(imageUrl);
				}, 100);
			};
		}
	}, [result]);

	const handlePost = () => {
		if (!result) return;
		postVideo({
			videoUrl: result.output_url!,
			music,
			caption: description,
		});
	};

	return (
		<div className="h-full w-full bg-neutral-900">
			<div className="max-w-md mx-auto p-4 bg-white h-screen flex flex-col relative">
				<div className="w-full flex my-6">
					<Link href={`/result/${id}`}>
						<BiChevronLeft
							fontSize={24}
							className="cursor-pointer"
						/>
					</Link>
				</div>

				<div className="grid grid-row-2 gap-2">
					<div className="grid grid-cols-3 gap-2">
						<textarea
							className="w-full p-2 col-span-2 text-base focus:outline-0"
							placeholder="Add description..."
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>

						{coverImage && (
							<div className="flex items-center justify-center min-h-[200px] bg-neutral-200 rounded-md overflow-hidden">
								<Image
									src={coverImage}
									alt="Video cover"
									className="object-cover"
									width={150}
									height={200}
								/>
							</div>
						)}
					</div>
					<div className="mt-4 flex space-x-2">
						<Button
							variant="secondary"
							onClick={() => {
								setDescription((prev) => `${prev} #`);
							}}
						>
							# Hashtags
						</Button>
						<Button
							variant="secondary"
							onClick={() => {
								setDescription((prev) => `${prev} @`);
							}}
						>
							@ Mention
						</Button>
					</div>
				</div>
				<Separator className="my-4" />

				<EditItems music={music} setMusic={setMusic} />

				<div className="fixed bottom-5 grid grid-cols-2 justify-center space-x-4 w-11/12 max-w-[26rem]">
					<Button variant="secondary" size="lg" disabled>
						<BiBox className="mr-2" />
						Drafts
					</Button>
					<Button
						className="bg-rose-600 hover:bg-rose-700 focus:bg-rose-700"
						size="lg"
						onClick={handlePost}
					>
						<BiUpload className="mr-2" />
						Post
					</Button>
				</div>
				{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
				<video ref={videoRef} className="hidden" />
			</div>
		</div>
	);
}
