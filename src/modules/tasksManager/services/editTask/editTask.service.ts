import { http } from "@api/http";
import { AxiosInstance } from "axios";
import { EditTaskInputDto } from "./editTask.dto";

class EditTaskService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(data: EditTaskInputDto): Promise<void> {
		await this.api.put(`/task`, data);
	}
}

const editTaskService = new EditTaskService(http);
export { editTaskService };
