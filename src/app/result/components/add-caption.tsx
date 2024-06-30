import { useState } from "react";
import { BiText } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

type AddCaptionDialogProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	caption: string;
	setCaption: (caption: string) => void;
};

export default function AddCaptionDialog({
	open,
	setOpen,
	caption,
	setCaption,
}: AddCaptionDialogProps) {
	const [localCaption, setLocalCaption] = useState(caption);
	const saveCaption = () => {
		setCaption(localCaption);
		setOpen(false);
	};
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<div className="text-white bg-neutral-800 bg-opacity-90 p-2 px-3 rounded-2xl flex gap-2 items-center fixed z-50 top-10">
					<BiText fontSize={20} />
					Add caption
				</div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] z-50">
				<DialogHeader>
					<DialogTitle>Add your caption</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="flex flex-col items-center gap-4">
						<Textarea
							id="caption"
							value={localCaption}
							onChange={(e) => setLocalCaption(e.target.value)}
						/>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={saveCaption}>Save</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
