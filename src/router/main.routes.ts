import { createBrowserRouter } from "react-router-dom";
import { tasksManagerRoutes } from "../modules/tasksManager/routes/index.routes";
import { loginRoutes } from "@/modules/login/routes/index.routes";

const router = createBrowserRouter([...tasksManagerRoutes, ...loginRoutes]);

export { router };
