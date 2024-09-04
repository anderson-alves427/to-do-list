import React, { createContext, useEffect, useState } from "react";
import { UserContextType } from "./userContextType";
import { User } from "@/shared/interfaces/User";

const UserContext = createContext<UserContextType>({} as UserContextType);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [dataUser, setDataUser] = useState<User>(() => {
		const userLocalStorage = localStorage.getItem("@todo-list-user-data");
		if (!userLocalStorage) return {} as User;
		const userLocalStorageParsed: User = JSON.parse(userLocalStorage);
		return userLocalStorageParsed;
	});
	useEffect(() => {
		if (dataUser) {
			localStorage.setItem("@todo-list-user-data", JSON.stringify(dataUser));
		}
	}, [dataUser]);

	const values: UserContextType = {
		user: {
			value: dataUser,
			set: setDataUser,
		},
	};
	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContextProvider, UserContext };
