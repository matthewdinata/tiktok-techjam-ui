"use client";

import { useRouter } from "next/navigation";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";

import { useHighlightStatus } from "@/hooks/use-highlights";

import Spinner from "@/components/icons";
import { Button } from "@/components/ui/button";

function TaskStatus({ taskId }: { taskId: string }) {
	const route = useRouter();
	const { data } = useHighlightStatus(taskId);
	const status = data?.status;

	if (status === "PROCESSING") {
		return (
			<Button
				variant="outline"
				className="items-center px-4 py-2 font-semibold leading-6 text-black transition ease-in-out duration-150 cursor-not-allowed"
			>
				<Spinner className="mr-1 h-5 w-5" />
				Processing Highlights...
			</Button>
		);
	}

	if (status === "DONE") {
		return (
			<Button
				variant="outline"
				className="items-center px-4 py-2 font-semibold leading-6 text-black bg-green-200 hover:bg-green-300 focus:bg-green-300 border-0"
				onClick={() => {
					route.push(`/result/${taskId}`);
				}}
			>
				<BiCheckCircle className="mr-2 text-green-600" fontSize={18} />
				Highlights Ready to Post
			</Button>
		);
	}

	if (status === "FAILED") {
		return (
			<Button
				variant="outline"
				className="items-center px-4 py-2 font-semibold leading-6 text-black bg-red-200 hover:bg-red-300 focus:bg-red-300 border-0"
			>
				<BiXCircle className="mr-2 text-red-600" fontSize={18} />
				Uh oh.. highlights failed
			</Button>
		);
	}
}

export default TaskStatus;
