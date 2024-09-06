import { Plus } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

type Props = {
	children: React.ReactNode;
	title: string;
	description: string;
};

const LayoutLoginRegister = ({ children, description, title }: Props) => {
	return (
		<div className="flex w-screen h-screen">
			<div className="w-11/12 flex flex-col justify-center items-center">
				<Card className="w-[400px]">
					<CardHeader>
						<CardTitle>{title}</CardTitle>
						<CardDescription>{description}</CardDescription>
					</CardHeader>
					<CardContent>{children}</CardContent>
				</Card>
			</div>
			<div className="flex w-full bg-primary-brand items-center z-40">
				<Plus className="absolute top-0 text-[15rem] text-slate-100 opacity-30" />
				<div>
					<p className="flex text-text-light font-semibold px-20 2xl:text-7xl lg:text-5xl">
						TODO LIST
					</p>
					<p className="flex text-text-light font-semibold px-20 2xl:text-3xl lg:text-2xl">
						Gerenciamento de tarefas personalizado para você.
					</p>
				</div>
				<Plus className="absolute right-0 bottom-6 text-[15rem] text-text-light opacity-30" />
			</div>
		</div>
	);
};

export { LayoutLoginRegister };
