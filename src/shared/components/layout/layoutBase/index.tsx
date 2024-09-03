import { ActionButton } from "@/shared/types/ActionButton";
import { SidebarButton } from "@/shared/types/SidebarButton";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
import { SidebarDrawer } from "../sidebarDrawer";
import { Button } from "../../ui/button";
import { CustomTooltip } from "../../tooltip";

type Props = {
	sidebarButtons?: SidebarButton[];
	actionButton?: ActionButton;
	children: React.ReactNode;
};

const iconLimit = 8;

const LayoutBase = ({ sidebarButtons = [], actionButton, children }: Props) => {
	const navigate = useNavigate();

	return (
		<div className="w-full h-screen flex">
			<aside className="w-[5%] flex flex-col items-center gap-6 relative">
				<div className="w-full h-[10%] flex items-center justify-center">
					{/* <img src={Logo} alt="logo" className="w-14 h-14" /> */}
				</div>
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
			<div className="w-[95%]">
				<header className="w-full h-[10%] flex items-center justify-between p-4">
					<div className="flex items-center gap-3">
						<Button
							variant="link"
							className="p-0 disabled:opacity-100"
							onClick={() => navigate("/")}
						>
							<h1 className="text-2xl font-semibold text-zinc-700">
								Dashboard
							</h1>
						</Button>
					</div>
					{actionButton && (
						<div className="flex-1 flex justify-end">
							<Button
								onClick={actionButton.onClick}
								className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600"
							>
								<span className="text-xl">{actionButton.icon}</span>
								<span className="text-sm font-semibold">
									{actionButton.label}
								</span>
							</Button>
						</div>
					)}
					{/* <div
						className={cn(
							"flex flex-col items-end justify-center gap-2 transition-all mt-12 data-[is-searching=true]:-translate-y-12",
							isAtendimentoMedico ? "w-[50%]" : "w-[25%]"
						)}
					>
						<div
							data-is-searching={searchInputIsEnabled}
							className={cn(
								"w-full h-full flex items-center gap-2 p-1 data-[is-searching=true]:opacity-0",
								isAtendimentoMedico ? "justify-end" : "justify-center"
							)}
						>
							<Button
								variant="outline"
								className="w-8 h-8 rounded-full border-zinc-700 p-2 hover:border-sky-500 hover:text-sky-500 hover:bg-white focus:bg-sky-500 focus:text-white focus:border-none"
							>
								<ArrowRight />
							</Button>
							<Button
								disabled
								variant="outline"
								className="w-8 h-8 rounded-full border-zinc-700 p-2 hover:border-sky-500 hover:text-sky-500 hover:bg-white focus:bg-sky-500 focus:text-white focus:border-none"
							>
								<ArrowRight />
							</Button>
							<Button
								disabled
								variant="outline"
								className="w-8 h-8 rounded-full border-zinc-700 p-2 hover:border-sky-500 hover:text-sky-500 hover:bg-white focus:bg-sky-500 focus:text-white focus:border-none"
							>
								<ArrowRight />
							</Button>
						</div>
					</div> */}
				</header>
				<div className="flex w-[99%] min-h-[88%] bg-zinc-100 rounded-lg p-8">
					{children}
				</div>
			</div>
		</div>
	);
};

export { LayoutBase };
