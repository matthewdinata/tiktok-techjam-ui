import { useSession } from "next-auth/react";

import createApiClient from "@/app/api/api-client";

// eslint-disable-next-line import/prefer-default-export
export function useAuthApiClient() {
	const { data: session } = useSession();
	return createApiClient(session?.sessionToken);
}
