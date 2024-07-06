import axios from "axios";

const createApiClient = (token?: string) =>
	axios.create({
		baseURL: "/api",
		headers: token ? { Authorization: `Bearer ${token}` } : {},
	});

export default createApiClient;
