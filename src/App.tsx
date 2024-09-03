import { RouterProvider } from "react-router-dom";
import { router } from "./router/main.routes";

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
