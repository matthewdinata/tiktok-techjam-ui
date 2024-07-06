"use client";

import { useQuery } from "@tanstack/react-query";
import { InferSelectModel } from "drizzle-orm";

import videos from "@/db/schema/videos";

import apiClient from "../api-client";
import { queryKeys } from "../query-keys";

export type VideoType = InferSelectModel<typeof videos>;

const getVideosFn = async () => {
	const response = await apiClient.get("videos");
	return response.data as VideoType[];
};

const getUserVideosFn = async (userId: string) => {
	const response = await apiClient.get(`videos?user=${userId}`);
	return response.data as VideoType[];
};

export function useVideos() {
	return useQuery({
		queryKey: queryKeys.videos.all,
		queryFn: getVideosFn,
	});
}

export function useUserVideos(userId: string) {
	return useQuery({
		queryKey: queryKeys.videos.byUser(userId),
		queryFn: () => getUserVideosFn(userId),
	});
}
