const queryKeys = {
	videos: {
		all: ["videos"],
		byUser: ["videos", "user"],
	},
	highlights: {
		status: (taskId: string) => ["highlights", "status", taskId],
		results: (taskId: string) => ["highlights", "results", taskId],
	},
};

export default queryKeys;
