"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import queryKeys from "./query-keys";
import useAuthApiClient from "./use-auth-api-client";

interface UploadHighlightParams {
	file: File;
	prompt: string[];
}

interface PostHighlightParams {
	videoUrl: string;
	music: string | null;
	caption: string | null;
}

interface ResultHighlightResponse {
	id: string;
	output_url: string;
}

interface RecentHighlightResponse {
	id: string;
	status: "PROCESSING" | "DONE" | "FAILED" | "CANCELLED" | null;
	started_at: string;
}
interface StatusHighlightResponse {
	id: string;
	status: string;
}

export function useUploadHighlight() {
	const apiClient = useAuthApiClient();
	const router = useRouter();

	return useMutation({
		mutationFn: async ({ file, prompt }: UploadHighlightParams) => {
			const formData = new FormData();
			formData.append("file", file);
			prompt.forEach((p) => formData.append("prompt", p));

			const response = await apiClient.post(
				"highlights/upload",
				formData,
				{
					headers: { "Content-Type": "multipart/form-data" },
				}
			);
			return response.data as string;
		},
		onSuccess: (data: string | undefined) => {
			router.push(`/progress/${data}`);
		},
	});
}

export function useHighlightStatus(taskId: string) {
	const apiClient = useAuthApiClient();

	return useQuery({
		queryKey: queryKeys.highlights.status(taskId),
		queryFn: async () => {
			const response = await apiClient.get(`highlights/${taskId}/status`);
			return response.data as StatusHighlightResponse;
		},
		enabled: !!taskId,
		refetchInterval: (query) => {
			const isProcessing = query.state.data?.status === "PROCESSING";
			if (isProcessing) return 10000;
			return false;
		},
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
			return response.data as ResultHighlightResponse;
		},
		enabled: !!taskId,
	});
}

export function useHighlightPost(taskId: string) {
	const apiClient = useAuthApiClient();
	const router = useRouter();

	return useMutation({
		mutationFn: async ({
			videoUrl,
			music,
			caption,
		}: PostHighlightParams) => {
			const body = { video_url: videoUrl, music, caption };

			const response = await apiClient.post(
				`highlights/${taskId}/post`,
				body,
				{
					headers: { "Content-Type": "application/json" },
				}
			);
			return response.data as string;
		},
		onSuccess: () => {
			router.push("/uploads");
		},
	});
}

export function useHighlightRecent() {
	const apiClient = useAuthApiClient();

	return useQuery({
		queryKey: queryKeys.highlights.recent,
		queryFn: async () => {
			const response = await apiClient.get("highlights/recent");
			return response.data as RecentHighlightResponse;
		},
	});
}
