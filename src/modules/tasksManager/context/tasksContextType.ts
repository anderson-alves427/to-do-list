import { GetGroupWithTasksOutputDto } from "../services/getGroupWithTasks/getGroupWithTasks.dto";

type TasksContextType = {
	groupWithTasks: {
		value: GetGroupWithTasksOutputDto;
		set: React.Dispatch<React.SetStateAction<GetGroupWithTasksOutputDto>>;
	};
	getTasks(user_id: string): Promise<void>;
};

export type { TasksContextType };
