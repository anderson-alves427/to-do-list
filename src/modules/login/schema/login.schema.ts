import { z } from "zod";

const loginSchema = z.object({
	username: z.string().min(5, "Usuário deve ter no mínimo 5 caracteres"),
	password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export { loginSchema };
export type { LoginSchema };
