import { createContext, useState } from "react";
import { TasksContextType } from "./tasksContextType";
import { GetGroupWithTasksOutputDto } from "../services/getGroupWithTasks/getGroupWithTasks.dto";
import { errorHandler } from "@/shared/api/errorHandler";
import { getGroupWithTasksService } from "../services/getGroupWithTasks/getGroupWithTasks.service";
import { GetTasksGroupsOutput } from "../services/getTasksGroups/getTasksGroups.dto";
import { getTasksGroupService } from "../services/getTasksGroups/getTasksGroups.service";

const TasksContext = createContext<TasksContextType>({} as TasksContextType);

const TasksContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [groupWithTasks, setGroupWithTasks] =
		useState<GetGroupWithTasksOutputDto>({
			page: 1,
			size: 30,
			total: 0,
			data: [],
		});
	const [group, setGroups] = useState<GetTasksGroupsOutput[]>([]);

	async function getTasks(user_id: string) {
		try {
			const response = await getGroupWithTasksService.execute({
				page: 1,
				size: 30,
				user_id,
			});
			setGroupWithTasks(response);
		} catch (error) {
			errorHandler(error);
		}
	}

	async function getTasksGroup() {
		try {
			const response = await getTasksGroupService.execute();
			setGroups(response);
		} catch (error) {
			errorHandler(error);
		}
	}

	const values: TasksContextType = {
		groupWithTasks: {
			value: groupWithTasks,
			set: setGroupWithTasks,
		},
		getTasks,
		groups: {
			value: group,
			set: setGroups,
		},
		getTasksGroup,
	};
	return (
		<TasksContext.Provider value={values}>{children}</TasksContext.Provider>
	);
};

export { TasksContextProvider, TasksContext };
