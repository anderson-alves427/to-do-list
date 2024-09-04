import { AxiosInstance } from "axios";
import { http } from "@/shared/api/https";
import { CreateTaskInputDto } from "./createTask.dto";

class CreateTaskService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(data: CreateTaskInputDto): Promise<void> {
		await this.api.post(`/task`, data);
	}
}

const createTaskService = new CreateTaskService(http);
export { createTaskService };
