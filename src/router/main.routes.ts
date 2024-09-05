import { createBrowserRouter } from "react-router-dom";
import { tasksManagerRoutes } from "../modules/tasksManager/routes/index.routes";
import { loginRoutes } from "@/modules/login/routes/index.routes";
import { registerUserRoutes } from "@/modules/registerUser/routes/index.routes";

const router = createBrowserRouter([
	...tasksManagerRoutes,
	...loginRoutes,
	...registerUserRoutes,
]);

export { router };
