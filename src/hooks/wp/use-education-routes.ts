import { useQuery } from "@tanstack/react-query";

export interface EducationRoute {
    slug: string;
    title: {
        rendered: string;
    };
}
export type EducationRoutesResponse = EducationRoute[];

async function getEducationRoutes(): Promise<EducationRoutesResponse> {
    const baseUrl = process.env.WORDPRESS_API_URL || "https://cms.opalconsulting.com.au/wp-json/wp/v2";
    const response = await fetch(`${baseUrl}/courseoffer?_fields=slug,title&per_page=100`, {
        next: { revalidate: 300 },
    });

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
