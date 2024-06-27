import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function DurationAlert({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (isOpen: boolean) => void;
}) {
	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogContent className="max-w-[80%] w-96 bg-neutral-900 border-neutral-700 text-white rounded-md">
				<AlertDialogHeader>
					<AlertDialogTitle>Oops!</AlertDialogTitle>
					<AlertDialogDescription className="text-white">
						Your video should be between 5 and 15 minutes long.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="mx-6 bg-neutral-900 border-neutral-600 hover:bg-neutral-900 hover:border-neutral-500 transition-all hover:scale-105 hover:text-white">
						Back
					</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
