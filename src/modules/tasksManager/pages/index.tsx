import { DragDropContext } from "react-beautiful-dnd";
import { ColumnTask } from "../components/columnTask";
import { LayoutTaksManager } from "../components/layoutTasksManager";
import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";
import { useTasksContext } from "../context/useTaskContext";
import { useEffect } from "react";
import { useUserContext } from "@/shared/contexts/user/useUserContext";
import { CreateGroupDialog } from "../components/createGroupDialog/createGroupDialog";

const TasksManager = () => {
	const { getTasks, groupWithTasks, getTasksGroup, groups } = useTasksContext();
	const { user } = useUserContext();
	function onDragEnd(result: any) {
		if (!result.destination) return;

		if (result.destination.droppableId === "data-table") return;
	}

	function onDragStart(result: any) {
		console.log("data", result);
	}

	useEffect(() => {
		getTasksGroup();
		getTasks(user.value.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<LayoutTaksManager>
			<h2 className="text-2xl font-semibold">Listagem de atividades</h2>
			<div className="flex gap-12 mt-10">
				<DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
					{groups.value.map((group) => {
						const groupData = groupWithTasks.value.data.find(
							(itemGroup) => itemGroup.id === group.id
						);

						return (
							<ColumnTask
								key={group.id}
								title={group.name}
								keyDroppabled={group.id}
								tasks={groupData ? groupData.tasks : []}
							/>
						);
					})}
				</DragDropContext>
				<div>
					<CreateGroupDialog />
				</div>
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
