import { RouterProvider } from "react-router-dom";
import { router } from "./router/main.routes";
import { Toaster } from "react-hot-toast";
import { useToasterConfig } from "./shared/hooks/useToasterConfig";
import { ContextProviders } from "./shared/contexts/main.context";

function App() {
	useToasterConfig();
	return (
		<ContextProviders>
			<Toaster position="top-right" />
			<RouterProvider router={router} />
		</ContextProviders>
	);
}

export default App;
