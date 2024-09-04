import { Plus } from "lucide-react";
import { tasks } from "../../mocks/tasks";
import { CardTasks } from "../cardTasks";

const ColumnTask = () => {
	return (
		<div className="flex flex-col gap-4 border border-grayscale-black rounded-lg border-dashed p-4">
			<div className="flex justify-between mb-4">
				<h3>Todo (4)</h3>
				<div className="flex gap-2">
					<button>
						<Plus />
					</button>
					<p>Add new task</p>
				</div>
			</div>
			{tasks.map((task) => (
				<CardTasks
					date={task.date}
					description={task.description}
					number_coments={task.number_coments}
					id={task.id}
					number_files={task.number_files}
					title={task.title}
				/>
			))}
		</div>
	);
};

export { ColumnTask };
