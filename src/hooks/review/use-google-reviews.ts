import { useQuery } from "@tanstack/react-query";

export interface Review {
    author_name: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
}

export interface GoogleReviewsResponse {
    rating: number;
    reviews: Review[];
    user_ratings_total: number;
}

async function getGoogleReviews(): Promise<GoogleReviewsResponse> {
    const response = await fetch("/api/google-reviews");

    if (!response.ok) {
        throw new Error("Unable to fetch google reviews.");
    }

    const data = await response.json();
    return data;
}

export function useGoogleReviews() {
    return useQuery<GoogleReviewsResponse, Error>({
        queryKey: ["google-reviews"],
        queryFn: getGoogleReviews,
        staleTime: 1000 * 60 * 60, // 1 hour
        retry: 1,
    });
}
