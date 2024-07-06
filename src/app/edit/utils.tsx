import { RefObject } from "react";

const captureVideoFrame = (videoRef: RefObject<HTMLVideoElement>) => {
	if (videoRef.current) {
		const canvas = document.createElement("canvas");
		canvas.width = videoRef.current.videoWidth;
		canvas.height = videoRef.current.videoHeight;
		const ctx = canvas.getContext("2d");
		if (ctx) {
			ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
		}
		return canvas.toDataURL("image/jpeg");
	}
	return null;
};

export default captureVideoFrame;
