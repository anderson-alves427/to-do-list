import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Ellipsis, Pencil } from "lucide-react";
import { GetTasksOutputDto } from "../../services/getTarefas/getTarefas.dto";

type Props = {
	tasks: GetTasksOutputDto;
	type: "create" | "edit";
};

const TaskManagerModal = ({ tasks }: Props) => {
	return (
		<Dialog>
			<DialogTrigger>
				<button className="rounded-full border-grayscale-black p-1 border">
					<Ellipsis size={18} />
				</button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						<div className="flex gap-2 items-center">
							<Pencil />
							<p>Editar tarefa</p>
						</div>
					</DialogTitle>
					<DialogDescription>
						Clique no botão salvar para editar uma tarefa.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export { TaskManagerModal };
