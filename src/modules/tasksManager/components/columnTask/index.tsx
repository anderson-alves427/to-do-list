import { CardTasks } from "../cardTasks";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { TaskManagerModal } from "../taskManagerModal";
import { ListTask } from "../../services/getGroupWithTasks/getGroupWithTasks.dto";

type Props = {
	title: string;
	keyDroppabled: string;
	tasks: ListTask[];
};

const ColumnTask = ({ title, keyDroppabled, tasks }: Props) => {
	return (
		<Droppable droppableId={keyDroppabled} key={keyDroppabled}>
			{(provided) => (
				<div
					{...provided.droppableProps}
					ref={provided.innerRef}
					className="w-80 flex flex-col gap-4 border-2 border-b-zinc-600 rounded-lg border-dashed p-4"
				>
					<>
						<div className="flex justify-between mb-4">
							<h3 className="font-semibold text-zinc-600 text-lg">{title}</h3>
							<div className="flex gap-2">
								<TaskManagerModal type="create" group_id={keyDroppabled} />
							</div>
						</div>
						{tasks.length > 0 ? (
							tasks.map((task, index) => (
								<Draggable
									key={task.id}
									draggableId={task.id.toString()}
									index={index}
								>
									{(provided) => (
										<div
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											<CardTasks task={task} group_id={keyDroppabled} />
										</div>
									)}
								</Draggable>
							))
						) : (
							<div className="flexjustify-center">
								Sem tarefas para listar...
							</div>
						)}

						{provided.placeholder}
					</>
				</div>
			)}
		</Droppable>
	);
};

export { ColumnTask };
