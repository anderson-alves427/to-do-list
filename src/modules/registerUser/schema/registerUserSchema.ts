import { z } from "zod";

const registerUserSchema = z.object({
	username: z.string().min(5, "Usuário deve ter no mínimo 5 caracteres"),
	password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
	name: z.string().min(6, "Nome deve ter no mínimo 6 caracteres"),
	email: z.string().min(6, "Email deve ter no mínimo 6 caracteres"),
});

type RegisterUserSchema = z.infer<typeof registerUserSchema>;

export { registerUserSchema };
export type { RegisterUserSchema };
