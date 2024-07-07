import axios from "axios";

const createApiClient = (token?: string) =>
	axios.create({
		baseURL: "https://tiktok-api.tzus.io/",
		headers: token ? { Authorization: `Bearer ${token}` } : {},
	});

export default createApiClient;
