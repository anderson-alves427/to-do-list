import { Plus } from "lucide-react";
import { CardTasks } from "../cardTasks";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { GetTasksOutputDto } from "../../services/getTarefas/getTarefas.dto";
import { TaskManagerModal } from "../taskManagerModal";

type Props = {
	title: string;
	keyDroppabled: string;
	tasks: GetTasksOutputDto[];
};

const ColumnTask = ({ title, keyDroppabled, tasks }: Props) => {
	return (
		<Droppable droppableId={keyDroppabled} key={keyDroppabled}>
			{(provided) => (
				<div
					{...provided.droppableProps}
					ref={provided.innerRef}
					className="flex flex-col gap-4 border border-grayscale-black rounded-lg border-dashed p-4"
				>
					<>
						<div className="flex justify-between mb-4">
							<h3>{title}</h3>
							<div className="flex gap-2">
								<TaskManagerModal type="create" />
							</div>
						</div>
						{tasks.map((task, index) => (
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
										<CardTasks task={task} />
									</div>
								)}
							</Draggable>
						))}

						{provided.placeholder}
					</>
				</div>
			)}
		</Droppable>
	);
};

export { ColumnTask };
