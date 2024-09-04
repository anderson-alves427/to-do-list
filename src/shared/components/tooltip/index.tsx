import {
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
	Tooltip,
} from "../ui/tooltip";

type Props = {
	text: string;
	delayDuration?: number;
	side?: "top" | "right" | "bottom" | "left";
	align?: "start" | "center" | "end";
	className?: string;
	children: React.ReactNode;
};

const CustomTooltip = ({
	text,
	delayDuration = 700,
	side = "top",
	align = "center",
	className,
	children,
}: Props) => (
	<TooltipProvider delayDuration={delayDuration}>
		<Tooltip>
			<TooltipTrigger>{children}</TooltipTrigger>
			<TooltipContent side={side} align={align} className={className}>
				<p>{text}</p>
			</TooltipContent>
		</Tooltip>
	</TooltipProvider>
);

export { CustomTooltip };
