import { Bell, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import dayjs from "dayjs";

const Header = () => {
	return (
		<header className="w-full bg-grayscale-light h-[10%] px-14 flex justify-between items-center shadow-lg">
			<h1 className="text-text-secondary font-bold text-2xl">TODOLIST</h1>

			<Input className="max-w-96" placeholder="Pesquise por uma tarefa" />

			<div className="flex gap-2 items-center">
				<Button size="sm">
					<Bell size={18} />
				</Button>
				<Button size="sm">
					<Calendar size={18} />
				</Button>
				<div className="ml-10">
					<p className="text-text-primary font-semibold">Seja-bem vindo!</p>
					<span className="text-secondary-brand font-semibold text-sm">
						{dayjs().format("DD/MM/YYYY")}
					</span>
				</div>
			</div>
		</header>
	);
};

export { Header };
