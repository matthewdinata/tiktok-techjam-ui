export default function Caption({ text }: { text: string }) {
	// Regular expression to match words starting with @ or #
	const regex = /(#\w+|@\w+)/g;

	// Split the text by spaces, including delimiters
	const parts = text.split(/(\s+)/);

	return (
		<div className="font-light leading-5">
			{parts.map((part, index) =>
				regex.test(part) ? (
					<span key={index} className="font-semibold">
						{part}
					</span>
				) : (
					<span key={index}>{part}</span>
				)
			)}
		</div>
	);
}
