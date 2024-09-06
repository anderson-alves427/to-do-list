import { DragDropContext } from "react-beautiful-dnd";
import { ColumnTask } from "../components/columnTask";
import { LayoutTaksManager } from "../components/layoutTasksManager";
import { CreateGroupDialog } from "../components/createGroupDialog/createGroupDialog";
import { useTasksManager } from "../hooks/useTasksManager";

const TasksManager = () => {
	const { groups, onDragEnd, groupWithTasks } = useTasksManager();

	return (
		<LayoutTaksManager>
			<h2 className="text-2xl font-semibold">Listagem de atividades</h2>
			<div className="flex gap-12 mt-10">
				<DragDropContext onDragEnd={onDragEnd}>
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
		</LayoutTaksManager>
	);
};

export { TasksManager };
