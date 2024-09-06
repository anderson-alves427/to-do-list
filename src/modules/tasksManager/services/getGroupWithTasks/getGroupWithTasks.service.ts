import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import {
	GetGroupWithTasksInputDto,
	GetGroupWithTasksOutputDto,
} from "./getGroupWithTasks.dto";

class GetGroupWithTasksService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(
		params: GetGroupWithTasksInputDto
	): Promise<GetGroupWithTasksOutputDto> {
		const result = await this.api.get<GetGroupWithTasksOutputDto>(`/task`, {
			params,
		});
		return result.data;
	}
}

const getGroupWithTasksService = new GetGroupWithTasksService(http);

export { getGroupWithTasksService, GetGroupWithTasksService };
