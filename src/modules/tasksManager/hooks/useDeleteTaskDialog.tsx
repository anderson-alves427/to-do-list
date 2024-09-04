import { errorHandler } from "@/shared/api/errorHandler";
import { deleteTaskService } from "../services/deleteTask/deleteTask.service";
import toast from "react-hot-toast";

export type UseDeleteTaskDialogProps = {
	id: string;
	title: string;
};

function useDeleteTaskDialog({ id, title }: UseDeleteTaskDialogProps) {
	async function handleClickConfirmDeleteTak() {
		try {
			await deleteTaskService.execute(id);
			toast.success("Tarefa deletada com sucesso.");
		} catch (error) {
			errorHandler(error);
		}
	}
	return {
		title,
		handleClickConfirmDeleteTak,
	};
}

export { useDeleteTaskDialog };
