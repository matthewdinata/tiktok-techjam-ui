import Image from "next/image";
import React from "react";

export default function TemplateContainer({
	posterSrc,
	posterAlt,
	creator,
	buttonComponent,
}: {
	posterSrc: string;
	posterAlt: string;
	creator: string;
	buttonComponent: React.ReactElement;
}) {
	return (
		<div className="flex flex-col gap-6 items-center">
			<div className="flex flex-col items-center gap-3">
				<div className="w-64 border-neutral-800 border-2 rounded-md">
					<Image
						src={posterSrc}
						width={500}
						height={500}
						alt={posterAlt}
						className="w-full h-auto rounded-md"
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
