import axios from "axios";
import { baseURL } from "@/shared/configs/paths";

function httpClientBuilder() {
	const client = axios.create({ baseURL });

	client.interceptors.request.use((config) => {
		const token = localStorage.getItem("@todo-list-access_token");

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	});

	client.interceptors.response.use(
		function (response) {
			return response;
		},
		async function (error) {
			if (error.response?.status === 401) {
				window.location.href = "/";
			}

			throw error;
		}
	);

	return client;
}

const http = httpClientBuilder();

export { http };
