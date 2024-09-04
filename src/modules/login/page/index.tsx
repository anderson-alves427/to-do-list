import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { useLogin } from "../hooks/useLogin";
import { Plus } from "lucide-react";
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

const Login = () => {
	const { form, onSubmit } = useLogin();

	return (
		<div className="flex w-screen h-screen">
			<div className="w-11/12 flex flex-col justify-center items-center">
				<Card className="w-[400px]">
					<CardHeader>
						<CardTitle>Login</CardTitle>
						<CardDescription>Realize o login na aplicação.</CardDescription>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="w-full space-y-6"
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
												<Input {...field} />
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
					</CardContent>
				</Card>
			</div>
			<div className="flex w-full bg-primary-brand items-center z-40">
				<Plus className="absolute top-0 text-[15rem] text-slate-100 opacity-30" />
				<div>
					<p className="flex text-text-light font-semibold px-20 2xl:text-7xl lg:text-5xl">
						TODO LIST
					</p>
					<p className="flex text-text-light font-semibold px-20 2xl:text-3xl lg:text-2xl">
						Gerenciamento de tarefas personalizado para você
					</p>
				</div>
				<Plus className="absolute right-0 bottom-6 text-[15rem] text-text-light opacity-30" />
			</div>
		</div>
	);
};

export { Login };
