import { TasksContextProvider } from "@/modules/tasksManager/context/tasksContextProvider";

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
	return <TasksContextProvider>{children}</TasksContextProvider>;
};

export { ContextProviders };
