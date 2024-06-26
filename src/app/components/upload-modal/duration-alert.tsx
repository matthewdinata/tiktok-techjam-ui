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
	// eslint-disable-next-line
	onOpenChange: (open: boolean) => void;
}) {
	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogContent className="max-w-[80%] w-96">
				<AlertDialogHeader>
					<AlertDialogTitle>Oops!</AlertDialogTitle>
					<AlertDialogDescription>
						Your video should be between 5 and 15 minutes long.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Back</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
