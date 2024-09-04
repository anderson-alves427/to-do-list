import { User } from "@/shared/interfaces/User";

type LoginInputDto = {
	username: string;
	password: string;
};
type LoginOutputDto = User & {
	accessToken: string;
};

export type { LoginInputDto, LoginOutputDto };
