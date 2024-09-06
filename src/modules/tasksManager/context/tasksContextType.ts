import { GetGroupWithTasksOutputDto } from "../services/getGroupWithTasks/getGroupWithTasks.dto";
import { GetTasksGroupsOutput } from "../services/getTasksGroups/getTasksGroups.dto";

type TasksContextType = {
	groupWithTasks: {
		value: GetGroupWithTasksOutputDto;
		set: React.Dispatch<React.SetStateAction<GetGroupWithTasksOutputDto>>;
	};
	groups: {
		value: GetTasksGroupsOutput[];
		set: React.Dispatch<React.SetStateAction<GetTasksGroupsOutput[]>>;
	};
	getTasks(user_id: string): Promise<void>;
	getTasksGroup(): Promise<void>;
};

export type { TasksContextType };
