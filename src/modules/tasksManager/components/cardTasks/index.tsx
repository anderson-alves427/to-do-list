import { Ellipsis, MessageSquareMore } from "lucide-react";
import { TaskManagerModal } from "../taskManagerModal";

type Props = {
	id: number;
	title: string;
	description: string;
	date: string;
	number_coments: number;
	number_files: number;
};

const CardTasks = ({
	date,
	description,
	number_coments,
	number_files,
	title,
}: Props) => {
	return (
		<div className="w-80 h-40 flex flex-col p-4 rounded-lg border border-grayscale-black shadow-lg justify-between">
			<div className="flex flex-col">
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-semibold">{title}</h3>
					<TaskManagerModal />
				</div>
				<span className="text-sm">{description}</span>
			</div>
			<div className="flex justify-between">
				<span className="bg-grayscale-light py-1  px-3 rounded-full text-secondary-brand text-sm font-semibold">
					{date}
				</span>
				<div className="flex gap-2">
					<div className="flex gap-1 items-center">
						<MessageSquareMore />
						<span className="text-text-primary">{number_coments}</span>
					</div>
					<div className="flex gap-1 items-center">
						<MessageSquareMore />
						<span className="text-text-primary">{number_files}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export { CardTasks };
