import { GetGroupWithTasksOutputDto } from "../services/getGroupWithTasks/getGroupWithTasks.dto";

type TasksContextType = {
	groupWithTasks: {
		value: GetGroupWithTasksOutputDto;
		set: React.Dispatch<React.SetStateAction<GetGroupWithTasksOutputDto>>;
	};
	getTasks(): Promise<void>;
};

export type { TasksContextType };
