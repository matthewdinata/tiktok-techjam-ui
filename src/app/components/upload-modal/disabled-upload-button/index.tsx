/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";

import { Button } from "@/components/ui/button";

import UploadAlert from "./upload-alert";

function DisabledUploadButton() {
	const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
	return (
		<>
			<UploadAlert open={isAlertOpen} onOpenChange={setIsAlertOpen} />
			<Button
				className="rounded-full bg-rose-600 w-64 hover:bg-rose-700 transition-all"
				onClick={() => setIsAlertOpen(true)}
			>
				Upload video
			</Button>
		</>
	);
}

export default DisabledUploadButton;
