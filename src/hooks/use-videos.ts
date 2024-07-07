"use client";

import { useQuery } from "@tanstack/react-query";
import { InferSelectModel } from "drizzle-orm";

import videos from "@/db/schema/videos";

import apiClient from "@/app/api/api-client";

import queryKeys from "./query-keys";

export type VideoType = InferSelectModel<typeof videos> & {
	name: string;
};

export function useVideos() {
	return useQuery({
		queryKey: queryKeys.videos.all,
		queryFn: async () => {
			const response = await apiClient.get("videos/fyp");
			return response.data as VideoType[];
		},
		refetchOnWindowFocus: false,
	});
}

export function useUserVideos() {
	return useQuery({
		queryKey: queryKeys.videos.byUser,
		queryFn: async () => {
			const response = await apiClient.get("videos");
			return response.data as VideoType[];
		},
		refetchOnWindowFocus: false,
	});
}
