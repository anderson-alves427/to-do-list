import { RouteObject } from "react-router-dom";
import { RegisterUser } from "../page";

const registerUserRoutes: RouteObject[] = [
	{
		path: "/register",
		element: <RegisterUser />,
	},
];

export { registerUserRoutes };
