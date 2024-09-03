import { LayoutBase } from "@/shared/components/layout/layoutBase";

type Props = {
	children: React.ReactNode;
};

const LayoutTaksManager = ({ children }: Props) => {
	return <LayoutBase>{children}</LayoutBase>;
};

export { LayoutTaksManager };
