import { z } from "zod";

const groupSchema = z.object({
	name: z.string().min(3, "Nome do grupo deve ter no mínimo 3 caracteres"),
});

type GroupSchema = z.infer<typeof groupSchema>;

export { groupSchema };
export type { GroupSchema };
