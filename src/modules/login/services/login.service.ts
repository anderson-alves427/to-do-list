import { http } from "@/shared/api/https";
import { baseURL } from "@/shared/configs/paths";
import { AxiosInstance } from "axios";
import { LoginInputDto, LoginOutputDto } from "./login.dto";

class LoginService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(data: LoginInputDto): Promise<LoginOutputDto> {
		const result = await this.api.post<LoginOutputDto>(
			baseURL + "/auth/login",
			data
		);

		const { accessToken, ...userData } = result.data;

		localStorage.setItem("@todo-list-access_token", accessToken);
		localStorage.setItem("@todo-list-user_data", JSON.stringify(userData));

		return result.data;
	}
}

const loginService = new LoginService(http);

export { LoginService, loginService };
