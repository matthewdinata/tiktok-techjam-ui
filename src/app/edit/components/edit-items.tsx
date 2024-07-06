"use client";

import {
	BiChevronRight,
	BiLogoFacebook,
	BiLogoMessenger,
	BiLogoTelegram,
	BiLogoWhatsapp,
} from "react-icons/bi";
import { FaLink, FaLocationArrow } from "react-icons/fa";
import { FaEarthAmericas, FaShare } from "react-icons/fa6";

function SocialMediaIcons() {
	return (
		<div className="flex gap-2">
			<div className="bg-neutral-200 rounded-full p-2">
				<BiLogoWhatsapp fontSize={20} />
			</div>
			<div className="bg-neutral-200 rounded-full p-2">
				<BiLogoTelegram fontSize={20} />
			</div>
			<div className="bg-neutral-200 rounded-full p-2">
				<BiLogoMessenger fontSize={20} />
			</div>
			<div className="bg-neutral-200 rounded-full p-2">
				<BiLogoFacebook fontSize={20} />
			</div>
		</div>
	);
}

export default function EditItems() {
	return (
		<>
			<div className="flex items-center justify-between p-2">
				<div className="flex items-center">
					<FaLocationArrow className="mr-3" />
					<span>Location</span>
				</div>
				<BiChevronRight />
			</div>

			<div className="mt-4">
				<div className="flex items-center justify-between p-2">
					<div className="flex items-center">
						<FaLink className="mr-3" />
						<span>Add link</span>
					</div>
					<BiChevronRight />
				</div>
			</div>

			<div className="mt-4">
				<div className="flex items-center justify-between p-2">
					<div className="flex items-center">
						<FaEarthAmericas className="mr-3" />
						<span>Followers can view this post</span>
					</div>
					<BiChevronRight />
				</div>
			</div>

			<div className="mt-4">
				<div className="flex items-center justify-between p-2">
					<div className="flex items-center">
						<FaShare className="mr-3" />
						<span>Share to</span>
					</div>
					<SocialMediaIcons />
				</div>
			</div>
		</>
	);
}
