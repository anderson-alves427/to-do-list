import { useNavigate } from "react-router-dom";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../../ui/sheet";
import { ArrowRight, LogOut } from "lucide-react";
import { cn } from "../../lib/utils";
import { SidebarButton } from "@/shared/types/SidebarButton";
import { Separator } from "../../ui/separator";

type Props = {
	children: React.ReactNode;
	buttons: SidebarButton[];
};

const SidebarDrawer = ({ children, buttons }: Props) => {
	const navigate = useNavigate();

	//mock
	return (
		<div>
			<Sheet modal={true}>
				<SheetTrigger asChild>{children}</SheetTrigger>
				<SheetContent
					side="left"
					className="bg-primary-brand text-text-primary"
				>
					<SheetHeader className="overflow-y-auto h-full overflow-x-hidden">
						<SheetTitle className="flex justify-center items-center">
							<p className="text-text-light">Uma foto</p>
							{/* <img src={AmareloLogo} alt="Logo" className="w-36 mt-2 mb-5" /> */}
						</SheetTitle>
						<Separator />
						<SheetDescription className="flex flex-col justify-between h-full">
							<div className="space-y-4 py-4">
								{buttons.map(({ icon, label, path, disabled }) => (
									<button
										key={path}
										onClick={() => navigate(path)}
										className={cn(
											"w-[95%] px-4 py-2 flex items-center justify-between rounded-full text-text-light hover:bg-secondary-brand hover:translate-x-2 focus:translate-x-2 focus:scale-105 transition-all",
											window.location.pathname === path && "bg-secondary-brand",
											disabled &&
												"hover:cursor-default  hover:bg-secondary-brand hover:text-text-primary hover:translate-x-0"
										)}
									>
										<div className="flex items-center justify-start gap-4">
											<span className="text-3xl">{icon}</span>
											<span className="text-lg">{label}</span>
										</div>
										<ArrowRight />
									</button>
								))}
							</div>
							<div className="flex flex-col items-center gap-4">
								<button
									onClick={() => console.log("Sair")}
									className={cn(
										"w-[95%] px-4 py-2 flex items-center justify-between rounded-full text-text-light hover:bg-secondary-brand hover:text-text-primary hover:translate-x-2 focus:translate-x-2 focus:bg-tertiary transition-all"
									)}
								>
									<div className="flex items-center justify-start gap-4">
										<span className="text-3xl">
											<LogOut />
										</span>
										<span className="text-lg ">Sair</span>
									</div>
								</button>
								<p className="text-zinc-50 text-lg">{"Anderson mock"}</p>
							</div>
						</SheetDescription>
						<SheetClose>
							<button className="absolute z-50 bottom-14 -right-1 -mr-4 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center group hover:bg-slate-200 transition-all">
								<ArrowRight />
							</button>
						</SheetClose>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export { SidebarDrawer };
