import { AxiosInstance } from "axios";
import { http } from "@/shared/api/https";

class CreateGroupTaskService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(name: string): Promise<void> {
		await this.api.post(`/group-task`, {
			name: name,
		});
	}
}

const createGroupTaskService = new CreateGroupTaskService(http);
export { createGroupTaskService };
