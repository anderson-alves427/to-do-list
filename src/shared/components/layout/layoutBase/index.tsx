import { ActionButton } from "@/shared/types/ActionButton";
import { SidebarButton } from "@/shared/types/SidebarButton";
import { ArrowRight } from "lucide-react";
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

const iconLimit = 8;

const LayoutBase = ({ sidebarButtons = [], actionButton, children }: Props) => {
	const navigate = useNavigate();

	return (
		<div className="w-full h-screen">
			<Header />
			<div className="flex mt-[2%] h-[86%]">
				<aside className="w-[5%] flex flex-col items-center gap-6 relative bg-primary-brand rounded-md">
					<CustomTooltip side="right" text="Dashboard">
						<button
							onClick={() => navigate("/")}
							className={cn(
								"w-8 h-8 flex items-center justify-center rounded-lg text-zinc-700 text-2xl hover:bg-zinc-100 hover:text-zinc-900 focus:bg-sky-500 focus:text-white transition-all",
								window.location.pathname === "/" && "bg-sky-500 text-white"
							)}
						>
							<ArrowRight />
						</button>
					</CustomTooltip>
					{sidebarButtons
						.map((item, index) => (
							<CustomTooltip key={index} side="right" text={item.label}>
								<button
									aria-label="teste"
									// onClick={() => handleNavigateAndSave(item.path)}
									disabled={item.disabled}
									className={cn(
										"w-8 h-8 flex items-center justify-center rounded-lg text-zinc-700 text-2xl hover:bg-sky-500/90 hover:text-white focus:bg-sky-500 focus:text-white transition-all  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
										window.location.pathname === item.path &&
											"bg-sky-500 text-white animate-none"
									)}
								>
									{item.icon}
								</button>
							</CustomTooltip>
						))
						.slice(0, iconLimit)}
					<SidebarDrawer buttons={sidebarButtons}>
						<button className="absolute bottom-8 right-0 -mr-4 bg-white w-8 h-8 rounded-full flex items-center justify-center group hover:bg-sky-500 transition-all">
							{sidebarButtons.length > iconLimit && (
								<p className="text-base text-sky-500 group-hover:text-white">
									+{sidebarButtons.length - iconLimit}
								</p>
							)}
							<ArrowRight />
						</button>
					</SidebarDrawer>
				</aside>
				<div className="w-full">{children}</div>
			</div>
		</div>
	);
};

export { LayoutBase };
