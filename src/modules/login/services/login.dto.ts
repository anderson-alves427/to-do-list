import { User } from "@/shared/interfaces/User";

type LoginInputDto = {
	username: string;
	password: string;
};
type LoginOutputDto = User & {
	id: string;
	name: string;
	role: "BASIC_MEMBER" | "ADMIN";
	created_at: Date;
	token: string;
};

export type { LoginInputDto, LoginOutputDto };
