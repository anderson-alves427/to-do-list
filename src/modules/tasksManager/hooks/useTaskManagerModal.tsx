import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, TaskSchema } from "../schemas/taskSchema";
import { GetTasksOutputDto } from "../services/getTarefas/getTarefas.dto";
import { useEffect } from "react";
import { errorHandler } from "@/shared/api/errorHandler";
import { editTaskService } from "../services/editTask/editTask.service";
import toast from "react-hot-toast";
import { createTaskService } from "../services/createTask/createTask.service";

export type TaskManagerModalProps = {
	task?: GetTasksOutputDto;
	type: "create" | "edit";
};

function useTaskManagerModal({ task, type }: TaskManagerModalProps) {
	const form = useForm<TaskSchema>({
		resolver: zodResolver(taskSchema),
		defaultValues: {
			deadline: "",
			description: "",
			id_responsible: "",
			title: "",
		},
	});

	const formErrors = form.formState.errors;

	async function onSubmit(data: TaskSchema) {
		try {
			if (type === "create") {
				await createTaskService.execute(data);
				toast.success("Tarefa registrada com sucesso");
			}

			if (type === "edit" && task && task.id) {
				await editTaskService.execute({ id: task.id, ...data });
				toast.success("Tarefa editada com sucesso");
			}

			form.reset();
		} catch (error) {
			errorHandler(error);
		}
	}

	useEffect(() => {
		function populateFormWithTask() {
			console.log("Fora");
			if (type === "edit" && task) {
				console.log("Entrou");
				form.setValue("title", task.title);
				form.setValue("description", task.description);
				form.setValue("id_responsible", task.id_responsible);
				form.setValue("deadline", task.deadline);
			}
		}

		populateFormWithTask();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		form,
		formErrors,
		onSubmit,
		task,
		type,
	};
}

export { useTaskManagerModal };
