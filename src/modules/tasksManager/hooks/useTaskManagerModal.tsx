import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, TaskSchema } from "../schemas/taskSchema";
import { useEffect, useRef } from "react";
import { errorHandler } from "@/shared/api/errorHandler";
import { editTaskService } from "../services/editTask/editTask.service";
import toast from "react-hot-toast";
import { createTaskService } from "../services/createTask/createTask.service";
import { ListTask } from "../services/getGroupWithTasks/getGroupWithTasks.dto";
import dayjs from "dayjs";
import { useUserContext } from "@/shared/contexts/user/useUserContext";
import { useTasksContext } from "../context/useTaskContext";

export type TaskManagerModalProps = {
	task?: ListTask;
	type: "create" | "edit";
	group_id: string;
};

function useTaskManagerModal({ task, type, group_id }: TaskManagerModalProps) {
	const { user } = useUserContext();
	const { getTasks } = useTasksContext();
	const form = useForm<TaskSchema>({
		resolver: zodResolver(taskSchema),
		defaultValues: {
			deadline: "",
			description: "",
			title: "",
		},
	});
	const refTriggerButton = useRef<HTMLButtonElement>(null);

	async function onSubmit(data: TaskSchema) {
		try {
			if (type === "create") {
				await createTaskService.execute({
					...data,
					user_id: user.value.id,
					group_task_id: group_id,

					deadline: dayjs(data.deadline).toDate(),
				});
				toast.success("Tarefa registrada com sucesso");
			}

			if (type === "edit" && task && task.id) {
				await editTaskService.execute({
					...data,
					id: task.id,
					deadline: dayjs(data.deadline).toDate(),
				});
				toast.success("Tarefa editada com sucesso");
			}
			refTriggerButton.current?.click();
			getTasks(user.value.id);
			form.reset();
		} catch (error) {
			errorHandler(error);
		}
	}

	useEffect(() => {
		function populateFormWithTask() {
			if (type === "edit" && task) {
				form.setValue("title", task.title);
				form.setValue("description", task.description);
				form.setValue("deadline", dayjs(task.deadline).format("YYYY-MM-DD"));
			}
		}

		populateFormWithTask();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		form,
		onSubmit,
		task,
		type,
		refTriggerButton,
	};
}

export { useTaskManagerModal };
