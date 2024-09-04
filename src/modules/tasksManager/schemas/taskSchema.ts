import { z } from "zod";

const taskSchema = z.object({
	title: z.string().min(5, "Um título deve ter no mínimo 3 caracteres"),
	description: z.optional(z.string()),
	deadline: z.optional(z.string()),
	id_responsible: z.optional(z.string()),
});

type TaskSchema = z.infer<typeof taskSchema>;

export { taskSchema };
export type { TaskSchema };
