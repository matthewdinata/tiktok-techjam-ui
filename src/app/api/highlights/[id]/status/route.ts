import axios from "axios";
import { NextResponse } from "next/server";

// eslint-disable-next-line import/prefer-default-export
export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const response = await axios.get(
			`https://tiktok-api.tzus.io/highlights/${params.id}/status`
		);
		return NextResponse.json(response.data);
	} catch (error) {
		return NextResponse.json(
			{ error: "An error occurred while fetching status" },
			{ status: 500 }
		);
	}
}
