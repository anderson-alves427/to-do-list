import { PageResponse } from "@/shared/types/pagination/PageResponse";
import { GetTasksGroupsOutput } from "../getTasksGroups/getTasksGroups.dto";
import { PageInput } from "@/shared/types/pagination/PageInput";

type GetGroupWithTasksInputDto = PageInput & {
	id_user: string;
};

type GetGroupWithTasksOutputDto = PageResponse<GetTasksGroupsWithTasks>;

type GetTasksGroupsWithTasks = GetTasksGroupsOutput & {
	tasks: ListTask[];
};

type ListTask = {
	id: string;
	title: string;
	description?: string;
	id_responsible?: string;
	deadline?: string;
	created_at: string;
	number_coments?: number;
};

export type { GetGroupWithTasksOutputDto, GetGroupWithTasksInputDto, ListTask };
