import { DragDropContext } from "react-beautiful-dnd";
import { ColumnTask } from "../components/columnTask";
import { LayoutTaksManager } from "../components/layoutTasksManager";
import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";
import { useTasksContext } from "../context/useTaskContext";
import { useEffect } from "react";
import { useUserContext } from "@/shared/contexts/user/useUserContext";

const TasksManager = () => {
	const { getTasks, groupWithTasks } = useTasksContext();
	const { user } = useUserContext();
	function onDragEnd(result: any) {
		if (!result.destination) return;

		if (result.destination.droppableId === "data-table") return;
	}

	function onDragStart(result: any) {
		console.log("data", result);
	}

	useEffect(() => {
		getTasks(user.value.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<LayoutTaksManager>
			<h2 className="text-2xl font-semibold">Listagem de atividades</h2>
			<div className="flex gap-12 mt-10">
				<DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
					{groupWithTasks.value.data.map((groupWithTask) => (
						<ColumnTask
							key={groupWithTask.id}
							title={groupWithTask.name}
							keyDroppabled={groupWithTask.id}
							tasks={groupWithTask.tasks}
						/>
					))}
				</DragDropContext>
			</div>
			{groupWithTasks.value.data.length > 0 && (
				<div className="flex justify-center items-center mt-10 gap-2 shadow-lg">
					<Button className="rounded-full" size="icon">
						<Plus />{" "}
					</Button>
					<span className="text-sm text-secondary-brand font-semibold">
						Carregar mais...
					</span>
				</div>
			)}
		</LayoutTaksManager>
	);
};

export { TasksManager };
