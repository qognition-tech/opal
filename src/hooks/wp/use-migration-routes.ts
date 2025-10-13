import { useQuery } from "@tanstack/react-query";

export interface MigrationRoute {
    slug: string;
    title: {
        rendered: string;
    };
}
export type MigrationRoutesResponse = MigrationRoute[];

async function getMigrationRoutes(): Promise<MigrationRoutesResponse> {
    const response = await fetch("/api/wp/migration?_fields=slug,title&per_page=100");

    if (!response.ok) {
        throw new Error("Unable to fetch migration routes.");
    }

    const data = await response.json();
    return data;
}

export function useMigrationRoutes() {
    return useQuery<MigrationRoutesResponse, Error>({
        queryKey: ["migration-routes"],
        queryFn: getMigrationRoutes,
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });
}
