import { PageResponse } from "@/shared/types/pagination/PageResponse";
import { GetTasksGroupsOutput } from "../getTasksGroups/getTasksGroups.dto";
import { PageInput } from "@/shared/types/pagination/PageInput";

type GetGroupWithTasksInputDto = PageInput & {
	user_id: string;
};

type GetGroupWithTasksOutputDto = PageResponse<GetTasksGroupsWithTasks>;

type GetTasksGroupsWithTasks = GetTasksGroupsOutput & {
	tasks: ListTask[];
};

type ListTask = {
	id: string;
	title: string;
	description: string;
	deadline: Date | null;
	created_at: Date;
};

export type { GetGroupWithTasksOutputDto, GetGroupWithTasksInputDto, ListTask };
