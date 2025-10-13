import { useQuery } from "@tanstack/react-query";

export interface Blog {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    featured_media: number;
    template: string;
    class_list: string[];
    yoast_head: string;
    yoast_head_json: YoastHeadJSON;
    _links: Links;
    _embedded?: {
        "wp:featuredmedia"?: {
            source_url: string;
            media_details?: {
                sizes?: {
                    full?: {
                        source_url: string;
                    };
                };
            };
        }[];
    };
}

export interface YoastHeadJSON {
    title: string;
    robots: Robots;
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    article_publisher: string;
    article_modified_time: string;
    og_image: OgImage[];
    twitter_card: string;
    twitter_misc: TwitterMisc;
    schema: Schema;
}

export interface Robots {
    index: string;
    follow: string;
    "max-snippet": string;
    "max-image-preview": string;
    "max-video-preview": string;
}

export interface OgImage {
    width: number;
    height: number;
    url: string;
    type: string;
}

export interface TwitterMisc {
    "Est. reading time": string;
}

export interface Schema {
    "@context": string;
    "@graph": Graph[];
}

export interface Graph {
    "@type": string;
    "@id": string;
    url?: string;
    name?: string;
    isPartOf?: IsPartOf;
    primaryImageOfPage?: IsPartOf;
    image?: IsPartOf;
    thumbnailUrl?: string;
    datePublished?: string;
    dateModified?: string;
    breadcrumb?: IsPartOf;
    inLanguage?: string;
    potentialAction?: PotentialAction[];
    contentUrl?: string;
    width?: number;
    height?: number;
    caption?: string;
    itemListElement?: ItemListElement[];
    description?: string;
    publisher?: IsPartOf;
    logo?: Logo;
    sameAs?: string[];
}

export interface IsPartOf {
    "@id": string;
}

export interface Logo extends IsPartOf {
    inLanguage: string;
    url: string;
    contentUrl: string;
    caption: string;
}

export interface ItemListElement {
    "@type": string;
    position: number;
    name: string;
    item?: string;
}

export interface PotentialAction {
    "@type": string;
    target: string[] | TargetClass;
    "query-input"?: QueryInput;
}

export interface QueryInput {
    "@type": string;
    valueRequired: boolean;
    valueName: string;
}

export interface TargetClass {
    "@type": string;
    urlTemplate: string;
}

export interface Links {
    self: Self[];
    collection: Self[];
    about: Self[];
    "wp:featuredmedia": WpFeaturedmedia[];
    "wp:attachment": Self[];
    curies: Cury[];
}

export interface Self {
    href: string;
}

export interface WpFeaturedmedia extends Self {
    embeddable: boolean;
}

export interface Cury {
    name: string;
    href: string;
    templated: boolean;
}

export type BlogResponse = Blog[];

export async function getBlog(slug: string): Promise<BlogResponse> {
    try {
        const response = await fetch(`/api/wp/blog?slug=${slug}&_embed`, {
            next: { revalidate: 300 }, // Revalidate every 5 minutes
        });

        if (!response.ok) {
            console.error(`Failed to fetch blog post: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return [];
    }
}

export function useBlog(slug: string) {
    return useQuery<BlogResponse, Error>({
        queryKey: ["blog", slug],
        queryFn: () => getBlog(slug),
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });
}
