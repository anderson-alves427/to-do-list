import { DragDropContext } from "react-beautiful-dnd";
import { ColumnTask } from "../components/columnTask";
import { LayoutTaksManager } from "../components/layoutTasksManager";
import { tasksAfazer, tasksConcluido, tasksEmAndamento } from "../mocks/tasks";

const TasksManager = () => {
	function onDragEnd(result: any) {
		if (!result.destination) return;

		if (result.destination.droppableId === "data-table") return;

		console.log("data", result);
	}

	function onDragStart(result: any) {
		console.log("data", result);
	}

	return (
		<LayoutTaksManager>
			<h2 className="text-2xl font-semibold">Listagem de atividades</h2>
			<div className="flex gap-12 mt-10">
				<DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
					<ColumnTask
						title="A fazer"
						keyDroppabled="fazer"
						tasks={tasksAfazer}
					/>
					<ColumnTask
						title="Em andamento"
						keyDroppabled="fazendo"
						tasks={tasksEmAndamento}
					/>
					<ColumnTask
						title="Concluído"
						keyDroppabled="concluido"
						tasks={tasksConcluido}
					/>
				</DragDropContext>
			</div>
		</LayoutTaksManager>
	);
};

export { TasksManager };
