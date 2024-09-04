import { useContext } from "react";
import { TasksContext } from "./tasksContextProvider";

const useTasksContext = () => {
	const context = useContext(TasksContext);

	if (context === undefined) {
		throw new Error(
			"useTasksContext must be used within a TasksContextProvider"
		);
	}

	return context;
};

export { useTasksContext };
