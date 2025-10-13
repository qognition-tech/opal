import { useQuery } from "@tanstack/react-query";

export interface EducationRoute {
    slug: string;
    title: {
        rendered: string;
    };
}
export type EducationRoutesResponse = EducationRoute[];

async function getEducationRoutes(): Promise<EducationRoutesResponse> {
    const response = await fetch("/api/wp/courseoffer?_fields=slug,title&per_page=100");

    if (!response.ok) {
        throw new Error("Unable to fetch education routes.");
    }

    const data = await response.json();
    return data;
}

export function useEducationRoutes() {
    return useQuery<EducationRoutesResponse, Error>({
        queryKey: ["education-routes"],
        queryFn: getEducationRoutes,
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });
}
