"use client";

import { useBlogs } from "@/hooks/wp/use-blogs";
import { Button } from "../ui/button";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

export function LatestNews() {
    const { data: blogs, isLoading } = useBlogs({ count: 3 });
    return (
        <div className="bg-primary-50 flex h-min w-full flex-col items-center justify-start gap-4 rounded-3xl p-2">
            <div className="bg-primary-300 flex w-full flex-col items-start justify-start gap-2 rounded-2xl p-4">
                <h3 className="font-albert-sans text-xl leading-[1.3em] tracking-[-1px] text-neutral-950">
                    Latest News
                </h3>
            </div>
            {isLoading ? (
                <LatestNewsSkeleton />
            ) : (
                <div className="flex w-full flex-col items-center justify-start gap-2">
                    {blogs?.map((blog) => {
                        const { title, slug, modified_gmt, _embedded } = blog;
                        const featuredMedia = _embedded?.["wp:featuredmedia"]?.[0];
                        const imageUrl = featuredMedia?.media_details?.sizes?.["mirai-reg"]?.source_url;
                        const fullImageUrl = featuredMedia?.media_details?.sizes?.full?.source_url;

                        const formattedDate = new Date(modified_gmt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        });

                        return (
                            <div
                                key={blog.slug}
                                className="bg-primary-100 hover:bg-primary-200 w-full rounded-2xl p-2 transition-colors hover:cursor-pointer"
                            >
                                <div className="flex h-full w-full gap-4">
                                    <div className="relative flex-1 overflow-hidden rounded-[9px] bg-neutral-100">
                                        {imageUrl ? (
                                            <Image
                                                src={imageUrl || fullImageUrl || "/images/placeholder.png"}
                                                alt={title.rendered}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
                                                <ImageIcon className="size-4 shrink-0" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-1 flex-col justify-center py-2">
                                        <Link
                                            href={`/blogs/${slug}`}
                                            className="hover:text-primary-700 font-albert-sans block text-base leading-[1.4em] font-medium tracking-[-0.5px] break-words text-neutral-900"
                                        >
                                            {title.rendered}
                                        </Link>
                                        <p className="mt-1 text-xs leading-[1.4em] text-neutral-500">{formattedDate}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            <Button variant="outline" size="xl" className="w-full" asChild>
                <Link href="/blogs">Read More</Link>
            </Button>
        </div>
    );
}

export function LatestNewsSkeleton() {
    return (
        <div className="flex w-full flex-col items-center justify-start gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-primary-100 w-full rounded-2xl p-2">
                    <div className="flex h-full w-full gap-4">
                        <div className="relative flex-1 overflow-hidden rounded-[9px] bg-neutral-100">
                            <Skeleton className="h-full w-full" />
                        </div>

                        <div className="flex flex-1 flex-col justify-center gap-2 py-2">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-3 w-1/2" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
