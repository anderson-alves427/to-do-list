import { RouteObject } from "react-router-dom";
import { TasksManager } from "../pages";
import { loader } from "../loader/index.loader";

const tasksManagerRoutes: RouteObject[] = [
	{
		path: "/tasks",
		element: <TasksManager />,
		loader: loader,
	},
];

export { tasksManagerRoutes };
