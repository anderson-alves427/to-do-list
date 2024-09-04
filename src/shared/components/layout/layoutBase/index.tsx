import { ActionButton } from "@/shared/types/ActionButton";
import { SidebarButton } from "@/shared/types/SidebarButton";
import { ArrowRight, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
import { SidebarDrawer } from "../sidebarDrawer";
import { CustomTooltip } from "../../tooltip";
import { Header } from "../../header";

type Props = {
	sidebarButtons?: SidebarButton[];
	actionButton?: ActionButton;
	children: React.ReactNode;
};

const LayoutBase = ({ sidebarButtons = [], actionButton, children }: Props) => {
	const navigate = useNavigate();

	return (
		<div className="w-full h-screen">
			<Header />
			<div className="flex h-[90%]">
				<aside className="w-[5%] flex flex-col items-center gap-6 relative bg-primary-brand rounded-r-md py-8">
					{sidebarButtons.map((item, index) => (
						<CustomTooltip key={index} side="right" text={item.label}>
							<button
								aria-label="teste"
								// onClick={() => handleNavigateAndSave(item.path)}
								disabled={item.disabled}
								className={cn(
									"w-8 h-8 flex items-center justify-center rounded-lg text-text-light text-2xl hover:bg-secondary-brand hover:text-white focus:bg-sky-500 focus:text-white transition-all  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
									window.location.pathname === item.path &&
										"bg-sky-500 text-white animate-none"
								)}
							>
								{item.icon}
							</button>
						</CustomTooltip>
					))}
					<CustomTooltip side="right" text="Sair">
						<button
							aria-label="teste"
							// onClick={() => handleNavigateAndSave(item.path)}
							className={cn(
								"w-8 h-8 flex items-center justify-center rounded-lg text-text-light text-2xl hover:bg-secondary-brand hover:text-white focus:bg-sky-500 focus:text-white transition-all  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
							)}
						>
							<LogOut />
						</button>
					</CustomTooltip>
					<SidebarDrawer buttons={sidebarButtons}>
						<button className="absolute bottom-8 right-0 -mr-4 bg-white w-8 h-8 rounded-full flex items-center justify-center group hover:bg-sky-500 transition-all">
							<ArrowRight />
						</button>
					</SidebarDrawer>
				</aside>
				<div className="w-full p-8">{children}</div>
			</div>
		</div>
	);
};

export { LayoutBase };
