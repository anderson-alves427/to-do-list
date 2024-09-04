import { ColumnTask } from "../components/columnTask";
import { LayoutTaksManager } from "../components/layoutTasksManager";

const TasksManager = () => {
	return (
		<LayoutTaksManager>
			<h2 className="text-2xl font-semibold">Listagem de atividades</h2>
			<div className="flex gap-12 mt-10">
				<ColumnTask />
				<ColumnTask />
			</div>
		</LayoutTaksManager>
	);
};

export { TasksManager };
