import { Button } from "@/shared/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Trash } from "lucide-react";
import {
	useDeleteTaskDialog,
	UseDeleteTaskDialogProps,
} from "../../hooks/useDeleteTaskDialog";

const DeleteTaskDialog = (props: UseDeleteTaskDialogProps) => {
	const { title, handleClickConfirmDeleteTak, refTriggerButton } =
		useDeleteTaskDialog(props);
	return (
		<Dialog>
			<DialogTrigger>
				<button
					ref={refTriggerButton}
					className="text-body-warning hover:scale-110"
				>
					<Trash size={20} />
				</button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						<div className="flex gap-2 items-center">
							<Trash className="text-body-warning" />
							<p>Deletar tarefa</p>
						</div>
					</DialogTitle>
					<DialogDescription>
						Você tem certeza que deseja exluir a tarefa{" "}
						<span className="font-semibold text-secondary-brand">{title}</span>?
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="mt-4">
					<Button
						variant="outline"
						onClick={() => refTriggerButton.current?.click()}
					>
						Cancelar
					</Button>
					<Button onClick={handleClickConfirmDeleteTak}>Confirmar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export { DeleteTaskDialog };
