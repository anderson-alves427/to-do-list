import { createContext, useState } from "react";
import { TasksContextType } from "./tasksContextType";
import { GetGroupWithTasksOutputDto } from "../services/getGroupWithTasks/getGroupWithTasks.dto";
import { errorHandler } from "@/shared/api/errorHandler";
import { getGroupWithTasksService } from "../services/getGroupWithTasks/getGroupWithTasks.service";
import { mocksTasks } from "../mocks/tasks";

const TasksContext = createContext<TasksContextType>({} as TasksContextType);

const TasksContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [groupWithTasks, setGroupWithTasks] =
		useState<GetGroupWithTasksOutputDto>({
			page: 1,
			size: 30,
			total: 0,
			data: [],
		});

	async function getTasks() {
		//mock
		try {
			// const response = await getGroupWithTasksService.execute({
			// 	page: 1,
			// 	size: 30,
			// 	id_user: "1",
			// });
			// setGroupWithTasks(response);
			//mock
			setGroupWithTasks(mocksTasks);
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
	};
	return (
		<TasksContext.Provider value={values}>{children}</TasksContext.Provider>
	);
};

export { TasksContextProvider, TasksContext };
