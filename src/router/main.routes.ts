import { createBrowserRouter } from "react-router-dom";
import { tasksManagerRoutes } from "../modules/tasksManager/routes/index.routes";

const router = createBrowserRouter([...tasksManagerRoutes]);

export { router };
