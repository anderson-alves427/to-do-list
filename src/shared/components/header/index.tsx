import { Bell, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Header = () => {
	//mock
	return (
		<header className="bg-grayscale-light py-4 px-14 flex justify-between items-center">
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
					<p className="text-text-primary font-semibold">Terça-feira</p>
					<span className="text-secondary-brand font-semibold text-sm">
						03/09/2024
					</span>
				</div>
			</div>
		</header>
	);
};

export { Header };
