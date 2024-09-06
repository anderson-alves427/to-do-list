type EditTaskInputDto = {
	id: string;
	deadline?: Date | null;
	group_task_id?: string;
	description?: string;
	title: string;
};

export type { EditTaskInputDto };
