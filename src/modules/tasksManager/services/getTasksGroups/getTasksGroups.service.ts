import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";

import { GetTasksGroupsOutput } from "./getTasksGroups.dto";

class GetTasksgroupService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(): Promise<GetTasksGroupsOutput[]> {
		const result = await this.api.get<GetTasksGroupsOutput[]>(`/group-task`);
		return result.data;
	}
}

const getTasksGroupService = new GetTasksgroupService(http);

export { getTasksGroupService, GetTasksgroupService };
