import { createContext, useState } from "react";
import { TasksContextType } from "./tasksContextType";
import { GetGroupWithTasksOutputDto } from "../services/getGroupWithTasks/getGroupWithTasks.dto";

const TasksContext = createContext<TasksContextType>({} as TasksContextType);

const TasksContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [groupWithTasks, setGroupWithTasks] =
		useState<GetGroupWithTasksOutputDto>({
			page: 1,
			size: 30,
			total: 0,
			data: [],
		});
	const values: TasksContextType = {
		groupWithTasks: {
			value: groupWithTasks,
			set: setGroupWithTasks,
		},
	};
	return (
		<TasksContext.Provider value={values}>{children}</TasksContext.Provider>
	);
};

export { TasksContextProvider, TasksContext };
