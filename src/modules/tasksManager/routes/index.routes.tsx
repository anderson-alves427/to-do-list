import { RouteObject } from "react-router-dom";
import { TasksManager } from "../pages";

const tasksManagerRoutes: RouteObject[] = [
	{
		path: "/tasks",
		element: <TasksManager />,
	},
];

export { tasksManagerRoutes };
