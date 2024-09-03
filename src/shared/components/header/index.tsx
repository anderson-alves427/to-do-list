import { Bell, Calendar } from "lucide-react";

const Header = () => {
	//mock
	return (
		<header className="bg-grayscale-light py-2 px-14 flex justify-between items-center">
			<h1 className="text-text-secondary font-bold">TODOLIST</h1>
			<div>input</div>
			<div className="flex gap-2 items-center">
				<Bell />
				<Calendar />
				<div className="ml-4">
					<p className="text-text-primary">Terça-feira</p>
					<span className="text-secondary-brand">03/09/2024</span>
				</div>
			</div>
		</header>
	);
};

export { Header };
