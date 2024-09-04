import { MessageSquareMore } from "lucide-react";
import { TaskManagerModal } from "../taskManagerModal";
import { GetTasksOutputDto } from "../../services/getTarefas/getTarefas.dto";

type Props = {
	task: GetTasksOutputDto;
};

const CardTasks = ({ task }: Props) => {
	return (
		<div className="w-80 h-40 flex flex-col p-4 rounded-lg border border-grayscale-black shadow-lg justify-between">
			<div className="flex flex-col">
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-semibold">{task.title}</h3>
					<TaskManagerModal type="edit" task={task} />
				</div>
				<span className="text-sm">{task.description}</span>
			</div>
			<div className="flex justify-between">
				<span className="bg-grayscale-light py-1  px-3 rounded-full text-secondary-brand text-sm font-semibold">
					{task.created_at}
				</span>

				<div className="flex gap-1 items-center">
					<MessageSquareMore />
					<span className="text-text-primary">{task.number_coments}</span>
				</div>
			</div>
		</div>
	);
};

export { CardTasks };
