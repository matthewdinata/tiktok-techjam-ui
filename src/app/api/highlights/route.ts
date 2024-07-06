import axios from "axios";
import { NextResponse } from "next/server";

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: Request) {
	try {
		const formData = await request.formData();
		const response = await axios.post(
			"https://tiktok-api.tzus.io/highlights/upload",
			formData,
			{
				headers: { "Content-Type": "multipart/form-data" },
			}
		);
		return NextResponse.json(response.data);
	} catch (error) {
		return NextResponse.json(
			{ error: "An error occurred during upload" },
			{ status: 500 }
		);
	}
}
