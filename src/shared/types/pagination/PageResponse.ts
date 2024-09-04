import { PageInput } from "./PageInput";

type PageResponse<T> = PageInput & {
	total: number;
	data: T[];
};

export type { PageResponse };
