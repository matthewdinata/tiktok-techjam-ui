// eslint-disable-next-line import/prefer-default-export
export const queryKeys = {
	videos: {
		all: ["videos"],
		byUser: (userId: string) => ["videos", "user", userId],
	},
	highlights: {
		status: (taskId: string) => ["highlights", "status", taskId],
		results: (taskId: string) => ["highlights", "results", taskId],
	},
};
