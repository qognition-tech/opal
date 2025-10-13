import { useQuery } from "@tanstack/react-query";

export interface Blog {
    slug: string;
    link: string;
    modified_gmt: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    _embedded: {
        author: Array<{
            name: string;
        }>;
        "wp:featuredmedia"?: Array<{
            media_details?: {
                sizes?: {
                    "mirai-reg"?: {
                        source_url: string;
                    };
                    full?: {
                        source_url: string;
                    };
                };
            };
        }>;
    };
}

export type BlogsResponse = Blog[];

async function getBlogs({ count }: { count: number }): Promise<BlogsResponse> {
    const baseUrl = process.env.WORDPRESS_API_URL || "https://opalconsulting.com.au/wp-json/wp/v2";
    const response = await fetch(
        `${baseUrl}/blog?_embed&per_page=${count}&_fields=slug,modified_gmt,link,title,content,yoast_head_json,_links`,
        {
            next: { revalidate: 300 },
        },
    );

    if (!response.ok) {
        throw new Error("Unable to fetch blogs information.");
    }

    const data = await response.json();
    return data;
}

export function useBlogs({ count }: { count: number }) {
    return useQuery<BlogsResponse, Error>({
        queryKey: ["blogs", count],
        queryFn: () => getBlogs({ count }),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
    });
}
