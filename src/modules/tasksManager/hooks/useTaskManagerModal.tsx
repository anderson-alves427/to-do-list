import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, TaskSchema } from "../schemas/taskSchema";

function useTaskManagerModal() {
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
	return {
		form,
		formErrors,
		onSubmit,
	};
}

export { useTaskManagerModal };
