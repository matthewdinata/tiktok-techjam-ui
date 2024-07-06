"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

import { queryKeys } from "./query-keys";
import { useAuthApiClient } from "./use-auth-api-client";
import { VideoType } from "./use-videos";

interface UploadHighlightParams {
	file: File;
	prompt: string[];
}

export function useUploadHighlight() {
	const apiClient = useAuthApiClient();
	return useMutation({
		mutationFn: async ({ file, prompt }: UploadHighlightParams) => {
			const formData = new FormData();
			formData.append("file", file);
			prompt.forEach((p) => formData.append("prompt[]", p));

			const response = await apiClient.post(
				"highlights/upload",
				formData,
				{
					headers: { "Content-Type": "multipart/form-data" },
				}
			);
			return response.data.taskId as string;
		},
	});
}

export function useHighlightStatus(taskId: string) {
	const apiClient = useAuthApiClient();
	return useQuery({
		queryKey: queryKeys.highlights.status(taskId),
		queryFn: async () => {
			const response = await apiClient.get(`highlights/${taskId}/status`);
			return response.data as number;
		},
		enabled: !!taskId,
		refetchInterval: 500,
	});
}
export function useHighlightResults(taskId: string) {
	const apiClient = useAuthApiClient();
	return useQuery({
		queryKey: queryKeys.highlights.results(taskId),
		queryFn: async () => {
			const response = await apiClient.get(
				`highlights/${taskId}/results`
			);
			return response.data as VideoType;
		},
		enabled: !!taskId,
	});
}
