type CreateTaskInputDto = {
	deadline?: Date | null;
	description: string;
	group_task_id: string;
	title: string;
};

export type { CreateTaskInputDto };
