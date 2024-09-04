import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, TaskSchema } from "../schemas/taskSchema";
import { GetTasksOutputDto } from "../services/getTarefas/getTarefas.dto";
import { useEffect } from "react";

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
		console.log("data", data);
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
