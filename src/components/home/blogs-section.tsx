"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { SectionContainer, SectionHeading } from "../common/section";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "@/hooks/wp/use-blogs";
import { Skeleton } from "../ui/skeleton";
import { Blog } from "@/hooks/wp/use-blogs";

export function BlogsSection() {
    const [index, setIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(375); // Initial guess: card width + gap
    const sliderRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleCards, setVisibleCards] = useState(3);

    const { data: blogs, isLoading } = useBlogs({ count: 6 });

    useEffect(() => {
        const slider = sliderRef.current;
        const container = containerRef.current;
        if (!slider || !container) return;

        const firstCard = slider.firstChild as HTMLElement;
        if (!firstCard) return;

        const updateDimensions = () => {
            const gap = parseInt(window.getComputedStyle(slider).gap, 10) || 20;
            const cardWidth = firstCard.offsetWidth;
            setSlideWidth(cardWidth + gap);

            const containerWidth = container.offsetWidth;
            setVisibleCards(Math.round(containerWidth / (cardWidth + gap)));
        };

        updateDimensions();

        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(container);
        resizeObserver.observe(firstCard);

        return () => resizeObserver.disconnect();
    }, [blogs]); // Re-run when blogs data loads

    const handlePrev = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        if (!blogs) return;
        setIndex((prev) => Math.min(prev + 1, blogs.length - visibleCards));
    };

    return (
        <SectionContainer className="flex w-full flex-col gap-12">
            <div className="flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <div className="flex w-full max-w-[600px] flex-1 flex-col items-center justify-center gap-5 text-center sm:items-start sm:justify-start sm:text-left">
                    <Badge className="font-geist">LATEST BLOGS</Badge>
                    <SectionHeading>Stay Ahead with Expert Visa Insights</SectionHeading>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Button
                        size="icon"
                        onClick={handlePrev}
                        disabled={index === 0}
                        className="bg-primary-100 text-primary-900 hover:bg-primary-100/90 active:bg-primary-700 size-10 rounded-full shadow-none active:text-neutral-50 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400"
                    >
                        <ArrowLeftIcon className="size-4" />
                    </Button>
                    <Button
                        size="icon"
                        onClick={handleNext}
                        disabled={!blogs || index >= blogs.length - visibleCards}
                        className="bg-primary-100 text-primary-900 hover:bg-primary-100/90 active:bg-primary-700 size-10 rounded-full shadow-none active:text-neutral-50 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400"
                    >
                        <ArrowRightIcon className="size-4" />
                    </Button>
                </div>
            </div>
            <div ref={containerRef} className="w-full flex-1 overflow-hidden">
                <motion.div
                    ref={sliderRef}
                    className="flex items-start justify-start gap-5"
                    animate={{ x: `-${index * slideWidth}px` }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {isLoading
                        ? Array.from({ length: 3 }).map((_, i) => <BlogCardSkeleton key={i} />)
                        : blogs?.map((item) => <BlogCard key={item.slug} {...item} />)}
                </motion.div>
            </div>
            <div className="flex items-center justify-center">
                <Button variant="outline" size="xl" asChild>
                    <Link href="/blogs">Read More</Link>
                </Button>
            </div>
        </SectionContainer>
    );
}

function BlogCard(blog: Blog) {
    const { title, content, slug, modified_gmt, _embedded } = blog;
    const featuredMedia = _embedded?.["wp:featuredmedia"]?.[0];
    const imageUrl = featuredMedia?.media_details?.sizes?.["mirai-reg"]?.source_url;
    const fullImageUrl = featuredMedia?.media_details?.sizes?.full?.source_url;

    const formattedDate = new Date(modified_gmt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const strippedExcerpt = content.rendered.replace(/<[^>]+>/g, "");

    return (
        <Link
            className="group bg-primary-100 flex h-min w-[calc(100vw-48px)] flex-shrink-0 cursor-pointer flex-col items-start justify-start gap-2 rounded-[20px] p-2 hover:drop-shadow-xl sm:w-[355px]"
            href={`/blogs/${slug}`}
        >
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "320 / 200" }}>
                <Image
                    src={imageUrl || fullImageUrl || "/images/placeholder.png"}
                    alt={title.rendered}
                    fill
                    className="rounded-2xl object-cover object-center brightness-99 group-hover:scale-105 group-hover:brightness-100 group-hover:transition-all group-hover:duration-400"
                />
                <Badge
                    variant="default"
                    className="absolute right-2 bottom-2 bg-neutral-950/80 hover:bg-neutral-950/80"
                >
                    {formattedDate}
                </Badge>
            </div>
            <div className="flex h-min w-full flex-col items-start justify-center gap-1 p-5 text-left">
                <h5
                    className="font-albert-sans line-clamp-2 text-left text-2xl leading-[1.3em] tracking-[-1px] break-words text-neutral-950"
                    dangerouslySetInnerHTML={{ __html: title.rendered }}
                />
                <p
                    className="line-clamp-3 text-left text-base leading-[1.4em] tracking-[-0.5px] text-neutral-600"
                    dangerouslySetInnerHTML={{ __html: strippedExcerpt }}
                />
            </div>
        </Link>
    );
}

function BlogCardSkeleton() {
    return (
        <div className="flex h-min w-[calc(100vw-48px)] flex-shrink-0 flex-col items-start justify-start gap-2 rounded-[20px] bg-neutral-50 p-2 sm:w-[355px]">
            <Skeleton className="aspect-[320/200] w-full rounded-2xl bg-neutral-100" />
            <div className="flex h-min w-full flex-col items-start justify-center gap-2 p-5">
                <Skeleton className="h-8 w-3/4 bg-neutral-100" />
                <Skeleton className="h-4 w-full bg-neutral-100" />
                <Skeleton className="h-4 w-5/6 bg-neutral-100" />
            </div>
        </div>
    );
}
