import { useLogin } from "../hooks/useLogin";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { LayoutLoginRegister } from "@/shared/components/layoutLoginRegister";
import { Link } from "react-router-dom";

const Login = () => {
	const { form, onSubmit } = useLogin();

	return (
		<LayoutLoginRegister
			title="Login"
			description="Realize o login na aplicação"
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full space-y-3"
				>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Usuário</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Senha</FormLabel>
								<FormControl>
									<Input {...field} type="password" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full">
						Entrar
					</Button>
				</form>
			</Form>
			<div className="mt-4">
				<Link to="/register" className="text-sm cursor-pointer">
					Não possui um usuário?{" "}
					<span className="text-secondary-brand font-semibold">
						Registre-se agora.
					</span>
				</Link>
			</div>
		</LayoutLoginRegister>
	);
};

export { Login };
