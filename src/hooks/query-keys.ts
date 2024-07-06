const queryKeys = {
	videos: {
		all: ["videos"],
		byUser: (userId: string) => ["videos", "user", userId],
	},
	highlights: {
		status: (taskId: string) => ["highlights", "status", taskId],
		results: (taskId: string) => ["highlights", "results", taskId],
	},
};

export default queryKeys;
