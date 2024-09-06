import { TasksContextProvider } from "@/modules/tasksManager/context/tasksContextProvider";
import { UserContextProvider } from "./user/userContextProvider";

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<UserContextProvider>
			<TasksContextProvider>{children}</TasksContextProvider>
		</UserContextProvider>
	);
};

export { ContextProviders };
