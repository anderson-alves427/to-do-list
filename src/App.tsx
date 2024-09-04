import { RouterProvider } from "react-router-dom";
import { router } from "./router/main.routes";
import { Toaster } from "react-hot-toast";
import { useToasterConfig } from "./shared/hooks/useToasterConfig";

function App() {
	useToasterConfig();
	return (
		<>
			<Toaster position="top-right" />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
