"use client";

import { useState } from "react";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Navbar } from "@/components/common/navbar";
import { SectionContainer } from "@/components/common/section";
import { useGoogleReviews } from "@/hooks/review/use-google-reviews";
import { Icons } from "@/assets/icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TestimonialsPage() {
    return (
        <div className="flex min-h-screen w-full flex-col gap-4">
            <Navbar />
            <div className="flex w-full flex-col gap-4 pt-[132px]">
                <Header title="Testimonials" />
                <TestimonialsSection />
            </div>
            <Footer />
        </div>
    );
}

function TestimonialsSection() {
    const { data } = useGoogleReviews();
    const [displayCount, setDisplayCount] = useState(6);

    const testimonials = data?.reviews || [];
    const displayedTestimonials = testimonials.slice(0, displayCount);
    const hasMore = displayCount < testimonials.length;

    const handleLoadMore = () => {
        setDisplayCount((prev) => prev + 6);
    };

    return (
        <SectionContainer className="sm:px-6 md:px-6 xl:px-10">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8">
                {displayedTestimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        testimonial={testimonial.text}
                        full_name={testimonial.author_name}
                        image={testimonial.profile_photo_url}
                    />
                ))}
                <Button variant="outline" size="xl" className="mt-4" asChild>
                    <Link href="https://share.google/chF3gxOsH7tNfC55l">View All</Link>
                </Button>
            </div>
        </SectionContainer>
    );
}

interface TestimonialCardProps {
    testimonial: string;
    full_name: string;
    image?: string;
}

function TestimonialCard({ testimonial, full_name, image }: TestimonialCardProps) {
    return (
        <div className="flex w-full flex-col items-center gap-6 rounded-3xl bg-neutral-100 p-8">
            <Icons.Quote className="text-primary-400 size-10 shrink-0" />
            <p className="text-center text-lg leading-[1.6em] tracking-[-0.5px] text-neutral-700">{testimonial}</p>
            <div className="flex flex-col items-center gap-3">
                <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
                    <Image
                        src={image ? image : "/images/testimonials/default.png"}
                        alt={full_name}
                        fill
                        className="h-full w-full shrink-0 object-cover"
                    />
                </div>
                <p className="text-center text-base leading-[1.4em] font-medium tracking-[-0.5px] text-neutral-950">
                    {full_name}
                </p>
            </div>
        </div>
    );
}
