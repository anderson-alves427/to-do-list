import { MessageSquareMore } from "lucide-react";
import { TaskManagerModal } from "../taskManagerModal";
import { DeleteTaskDialog } from "../deleteTaskDialog";
import { ListTask } from "../../services/getGroupWithTasks/getGroupWithTasks.dto";
import dayjs from "dayjs";

type Props = {
	task: ListTask;
};

const CardTasks = ({ task }: Props) => {
	return (
		<div className="w-80 h-40 flex flex-col p-4 rounded-lg border border-grayscale-black shadow-lg justify-between">
			<div className="flex flex-col">
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-semibold">{task.title}</h3>
					<div className="flex gap-2 items-center">
						<DeleteTaskDialog id={task.id} title={task.title} />
						<TaskManagerModal type="edit" task={task} />
					</div>
				</div>
				<span className="text-sm">{task.description}</span>
			</div>
			<div className="flex justify-between">
				<span className="bg-grayscale-light py-1  px-3 rounded-full text-secondary-brand text-sm font-semibold">
					{dayjs(task.created_at).format("DD/MM/YYYY")}
				</span>

				<div className="flex gap-1 items-center">
					<MessageSquareMore />
					<span className="text-text-primary">5</span>
				</div>
			</div>
		</div>
	);
};

export { CardTasks };
