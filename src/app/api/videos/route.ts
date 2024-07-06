import axios from "axios";
import { NextResponse } from "next/server";

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const userId = searchParams.get("user");

	try {
		const url = userId
			? `https://tiktok-api.tzus.io/videos?user=${userId}`
			: "https://tiktok-api.tzus.io/videos";

		const response = await axios.get(url);
		return NextResponse.json(response.data);
	} catch (error) {
		return NextResponse.json(
			{ error: "An error occurred" },
			{ status: 500 }
		);
	}
}
