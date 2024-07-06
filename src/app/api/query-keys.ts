// eslint-disable-next-line import/prefer-default-export
export const queryKeys = {
	videos: {
		all: ["videos"],
		byUser: (userId: string) => ["videos", "user", userId],
	},
};
