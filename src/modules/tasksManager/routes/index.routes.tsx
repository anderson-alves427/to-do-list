import { RouteObject } from "react-router-dom";
import { TasksManager } from "../pages";

const tasksManagerRoutes: RouteObject[] = [
	{
		path: "/",
		element: <TasksManager />,
	},
];

export { tasksManagerRoutes };
