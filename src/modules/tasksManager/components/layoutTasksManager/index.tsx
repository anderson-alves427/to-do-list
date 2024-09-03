import { LayoutBase } from "@/shared/components/layout/layoutBase";
import { SidebarButton } from "@/shared/types/SidebarButton";
import { ClipboardList, House } from "lucide-react";

type Props = {
	children: React.ReactNode;
};

const LayoutTaksManager = ({ children }: Props) => {
	const sidebarButtons: SidebarButton[] = [
		{
			label: "Dashboard",
			path: "/",
			icon: <House />,
		},
		{
			label: "Tarefas",
			path: "/tarefas",
			icon: <ClipboardList />,
		},
	];
	return <LayoutBase sidebarButtons={sidebarButtons}>{children}</LayoutBase>;
};

export { LayoutTaksManager };
