const queryKeys = {
	videos: {
		all: ["videos"],
		byUser: ["videos", "user"],
	},
	highlights: {
		status: (taskId: string) => ["highlights", "status", taskId],
		results: (taskId: string) => ["highlights", "results", taskId],
		recent: ["highlights", "recent"],
	},
};

export default queryKeys;
