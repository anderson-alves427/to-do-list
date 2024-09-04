import { GetGroupWithTasksOutputDto } from "../services/getGroupWithTasks/getGroupWithTasks.dto";

type TasksContextType = {
	groupWithTasks: {
		value: GetGroupWithTasksOutputDto;
		set: React.Dispatch<React.SetStateAction<GetGroupWithTasksOutputDto>>;
	};
};

export type { TasksContextType };
