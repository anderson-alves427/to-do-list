import { errorHandler } from "@/shared/api/errorHandler";
import { deleteTaskService } from "../services/deleteTask/deleteTask.service";
import toast from "react-hot-toast";
import { useRef } from "react";
import { useTasksContext } from "../context/useTaskContext";
import { useUserContext } from "@/shared/contexts/user/useUserContext";

export type UseDeleteTaskDialogProps = {
	id: string;
	title: string;
};

function useDeleteTaskDialog({ id, title }: UseDeleteTaskDialogProps) {
	const refTriggerButton = useRef<HTMLButtonElement>(null);
	const { user } = useUserContext();
	const { getTasks } = useTasksContext();

	async function handleClickConfirmDeleteTak() {
		try {
			await deleteTaskService.execute(id);
			toast.success("Tarefa deletada com sucesso.");
			refTriggerButton.current?.click();
			getTasks(user.value.id);
		} catch (error) {
			errorHandler(error);
		}
	}
	return {
		title,
		handleClickConfirmDeleteTak,
		refTriggerButton,
	};
}

export { useDeleteTaskDialog };
