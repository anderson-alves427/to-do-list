import { Plus } from "lucide-react";
import { CardTasks } from "../cardTasks";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { GetTasksOutputDto } from "../../services/getTarefas/getTarefas.dto";

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
								<button>
									<Plus />
								</button>
								<p>Nova tarefa</p>
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
										<CardTasks
											date={task.created_at}
											description={task.description}
											number_coments={task.number_coments}
											id={task.id}
											number_files={task.number_files}
											title={task.title}
										/>
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
