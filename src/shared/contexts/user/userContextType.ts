import { User } from "@/shared/interfaces/User";

type UserContextType = {
	user: {
		value: User;
		set: React.Dispatch<User>;
	};
};

export type { UserContextType };
