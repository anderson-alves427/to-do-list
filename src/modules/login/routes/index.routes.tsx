import { RouteObject } from "react-router-dom";
import { Login } from "../page";

const loginRoutes: RouteObject[] = [
	{
		path: "/login",
		element: <Login />,
	},
];

export { loginRoutes };
