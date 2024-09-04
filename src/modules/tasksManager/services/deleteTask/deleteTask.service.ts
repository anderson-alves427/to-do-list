import { AxiosInstance } from "axios";
import { http } from "@/shared/api/https";

class DeleteTaskService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(id: string): Promise<void> {
		await this.api.put(`/task/${id}`);
	}
}

const deleteTaskService = new DeleteTaskService(http);
export { deleteTaskService };
