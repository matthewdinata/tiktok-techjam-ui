import { useSession } from "next-auth/react";

import createApiClient from "@/app/api/api-client";

export default function useAuthApiClient() {
	const { data: session } = useSession();
	return createApiClient(session?.sessionToken);
}
