import { redirect } from "react-router-dom";

const loader = () => {
	const accessTokenStoraged = localStorage.getItem("@todo-list-access_token");
	if (!accessTokenStoraged) throw redirect("/");
	return null;
};

export { loader };
