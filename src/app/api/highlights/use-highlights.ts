"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

import apiClient from "../api-client";
import { queryKeys } from "../query-keys";

interface UploadHighlightParams {
	file: File;
	prompt: string[];
}

const uploadHighlightFn = async ({ file, prompt }: UploadHighlightParams) => {
	const formData = new FormData();
	formData.append("file", file);
	prompt.forEach((p) => formData.append("prompt[]", p));

	const response = await apiClient.post("highlights/upload", formData, {
		headers: { "Content-Type": "multipart/form-data" },
	});
	return response.data.taskId as string;
};

const getHighlightStatusFn = async (taskId: string) => {
	const response = await apiClient.get(`highlights/${taskId}/status`);
	return response.data as number;
};

const getHighlightResultsFn = async (taskId: string) => {
	const response = await apiClient.get(`highlights/${taskId}/results`);
	return response.data as string; // Assuming the API returns a video URL
};

export function useUploadHighlight() {
	return useMutation({
		mutationFn: uploadHighlightFn,
	});
}

export function useHighlightStatus(taskId: string) {
	return useQuery({
		queryKey: queryKeys.highlights.status(taskId),
		queryFn: () => getHighlightStatusFn(taskId),
		enabled: !!taskId,
		refetchInterval: 500,
	});
}
export function useHighlightResults(taskId: string) {
	return useQuery({
		queryKey: queryKeys.highlights.results(taskId),
		queryFn: () => getHighlightResultsFn(taskId),
		enabled: !!taskId,
	});
}
