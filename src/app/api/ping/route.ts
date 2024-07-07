import { isAxiosError } from "axios";
import { NextResponse } from "next/server";

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
	const path = "/ping";
	try {
		return NextResponse.json({ message: "pong" });
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
