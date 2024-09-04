import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "../schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { errorHandler } from "@/shared/api/errorHandler";
import { loginService } from "../services/login.service";
import { useUserContext } from "@/shared/contexts/user/useUserContext";
import { useNavigate } from "react-router-dom";

function useLogin() {
	const { user } = useUserContext();
	const navigate = useNavigate();
	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			password: "",
			username: "",
		},
	});

	async function onSubmit(data: LoginSchema) {
		try {
			console.log(data);
			const result = await loginService.execute(data);
			user.set(result);
			navigate("/");
		} catch (error) {
			errorHandler(error);
		}
	}

	return {
		form,
		onSubmit,
	};
}
export { useLogin };
