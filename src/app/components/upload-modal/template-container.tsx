import Image from "next/image";
import React from "react";

export default function TemplateContainer({
	title,
	posterSrc,
	posterAlt,
	creator,
	buttonComponent,
}: {
	title: string;
	posterSrc: string;
	posterAlt: string;
	creator: string;
	buttonComponent: React.ReactElement;
}) {
	return (
		<div className="flex flex-col gap-6 items-center">
			<div className="flex flex-col items-center gap-3">
				<div className="text-lg font-semibold">{title}</div>
				<div className="w-64 h-96 border-neutral-800 border-2 rounded-md">
					<Image
						src={posterSrc}
						width={500}
						height={500}
						alt={posterAlt}
						className="w-full h-full rounded-md object-fit"
					/>
				</div>
				<span className="text-xs text-neutral-300 font-medium">
					by {creator}
				</span>
			</div>
			{buttonComponent}
		</div>
	);
}
