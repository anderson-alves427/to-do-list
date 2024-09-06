import { http } from "@/shared/api/https";
import { baseURL } from "@/shared/configs/paths";
import { AxiosInstance } from "axios";
import { CreateuserInputDto } from "./createUser.dto";

class CreateUserService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(data: CreateuserInputDto): Promise<void> {
		await this.api.post<void>(baseURL + "/user", data);
	}
}

const createUserService = new CreateUserService(http);

export { CreateUserService, createUserService };
