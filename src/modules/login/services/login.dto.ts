type LoginInputDto = {
	username: string;
	password: string;
};
type LoginOutputDto = {
	id: number;
	user: string;
	name: number;
	perfil: string;
	accessToken: string;
};

export type { LoginInputDto, LoginOutputDto };
