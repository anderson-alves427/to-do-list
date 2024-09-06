import { LayoutLoginRegister } from "@/shared/components/layoutLoginRegister";
import { Button } from "@/shared/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useRegisterUser } from "../hooks/useRegisterUser";
import { Link } from "react-router-dom";

const RegisterUser = () => {
	const { form, onSubmit } = useRegisterUser();

	return (
		<LayoutLoginRegister
			title="Registrar usuário"
			description="Insira os campos abaixo para cadastrar um usuário na aplicação."
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full space-y-2"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nome</FormLabel>
								<FormControl>
									<Input {...field} type="text"/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Usuário</FormLabel>
								<FormControl>
									<Input {...field} type="text"/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input {...field} type="email" />
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
									<Input {...field} type="password"/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full">
						Cadastrar
					</Button>
				</form>
			</Form>
			<div className="mt-4">
				<Link to="/" className="text-sm cursor-pointer">
					Já possui um usuário?{" "}
					<span className="text-secondary-brand font-semibold">
						Volte para o login.
					</span>
				</Link>
			</div>
		</LayoutLoginRegister>
	);
};

export { RegisterUser };
