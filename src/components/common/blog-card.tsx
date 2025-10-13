"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
interface BlogCardProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    date: string;
    slug: string;
}

export function BlogCard({ title, description, image, imageAlt, date, slug }: BlogCardProps) {
    return (
        <Link
            className="group bg-primary-100 flex h-full w-full max-w-xl flex-shrink-0 cursor-pointer flex-col items-start justify-start gap-2 rounded-[20px] p-2 hover:drop-shadow-xl"
            href={`/blogs/${slug}`}
        >
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "320 / 200" }}>
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="rounded-2xl object-cover object-center brightness-99 group-hover:scale-105 group-hover:brightness-100 group-hover:transition-all group-hover:duration-400"
                />
                <Badge
                    variant="default"
                    className="absolute right-2 bottom-2 bg-neutral-950/80 hover:bg-neutral-950/80"
                >
                    {date}
                </Badge>
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-start gap-1 p-5 text-left">
                <h5 className="font-albert-sans line-clamp-2 text-left text-2xl leading-[1.3em] tracking-[-1px] break-words text-neutral-950">
                    {title}
                </h5>
                <p className="line-clamp-3 text-left text-base leading-[1.4em] tracking-[-0.5px] break-all text-neutral-600">
                    {description}
                </p>
            </div>
        </Link>
    );
}

export function BlogCardSkeleton() {
    return (
        <div className="flex h-min w-full flex-shrink-0 flex-col items-start justify-start gap-2 rounded-[20px] bg-neutral-50 p-2">
            <Skeleton className="aspect-[320/200] w-full rounded-2xl bg-neutral-100" />
            <div className="flex h-min w-full flex-col items-start justify-center gap-2 p-5">
                <Skeleton className="h-8 w-3/4 bg-neutral-100" />
                <Skeleton className="h-4 w-full bg-neutral-100" />
                <Skeleton className="h-4 w-5/6 bg-neutral-100" />
            </div>
        </div>
    );
}
