import axios, { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: NextRequest) {
	const path = "/highlights/upload";
	try {
		const formData = await request.formData();
		const sessionToken = request.cookies.get("authjs.session-token")?.value;
		const response = await axios.post(
			`https://tiktok-api.tzus.io${path}`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${sessionToken}`,
				},
			}
		);
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

export const config = {
	api: {
		bodyParser: false,
	},
};
