import { useForm } from "react-hook-form";
import { groupSchema, GroupSchema } from "../schemas/groupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { errorHandler } from "@/shared/api/errorHandler";
import { createGroupTaskService } from "../services/createGroupTask/createGroupTask.service";
import { useRef } from "react";
import toast from "react-hot-toast";

function useCreateDialog() {
	const form = useForm<GroupSchema>({
		resolver: zodResolver(groupSchema),
		defaultValues: {
			name: "",
		},
	});
	const refTriggerButton = useRef<HTMLButtonElement>(null);

	async function onSubmit(data: GroupSchema) {
		try {
			await createGroupTaskService.execute(data.name);
			form.reset();
			toast.success("Grupo criado com sucesso");
			refTriggerButton.current?.click();
		} catch (error) {
			errorHandler(error);
		}
	}

	return {
		form,
		onSubmit,
		refTriggerButton,
	};
}

export { useCreateDialog };
