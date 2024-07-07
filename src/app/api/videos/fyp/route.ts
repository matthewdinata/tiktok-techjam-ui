import axios, { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
	const path = "/videos/fyp";
	try {
		const sessionToken = request.cookies.get("authjs.session-token")?.value;
		const response = await axios.get(`https://tiktok-api.tzus.io${path}`, {
			headers: {
				Authorization: `Bearer ${sessionToken}`,
			},
		});
		return NextResponse.json(response.data);
	} catch (error) {
		if (isAxiosError(error)) {
			return NextResponse.json(
				{ error: error.response?.data },
				{ status: error.response?.status }
			);
		}
		return NextResponse.json(
			{ error: `An error occurred on ${path}` },
			{ status: 500 }
		);
	}
}
