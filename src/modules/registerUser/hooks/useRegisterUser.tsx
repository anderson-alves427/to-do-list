import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
	registerUserSchema,
	RegisterUserSchema,
} from "../schema/registerUserSchema";
import { errorHandler } from "@/shared/api/errorHandler";
import { createUserService } from "../services/createUser/createUser.service";
import toast from "react-hot-toast";

function useRegisterUser() {
	const navigate = useNavigate();
	const form = useForm<RegisterUserSchema>({
		resolver: zodResolver(registerUserSchema),
		defaultValues: {
			password: "",
			username: "",
			email: "",
			name: "",
		},
	});

	async function onSubmit(data: RegisterUserSchema) {
		try {
			await createUserService.execute(data);
			toast.success("Usuário registrado com sucesso.");
			navigate("/");
			form.reset();
		} catch (error) {
			errorHandler(error);
		}
	}

	return {
		form,
		onSubmit,
	};
}

export { useRegisterUser };
