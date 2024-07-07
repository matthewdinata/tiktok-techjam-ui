const checkValidVideoDuration = (videoFile: File): Promise<boolean> =>
	new Promise((resolve) => {
		const video = document.createElement("video");
		video.preload = "metadata";

		video.onloadedmetadata = () => {
			window.URL.revokeObjectURL(video.src);
			resolve(video.duration >= 5 * 60 && video.duration <= 15 * 60);
		};

		video.src = URL.createObjectURL(videoFile);
	});

export default checkValidVideoDuration;
