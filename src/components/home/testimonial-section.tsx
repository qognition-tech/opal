"use client";

import * as motion from "motion/react-client";
import { Icons } from "@/assets/icons";
import { SectionContainer, SectionHeading, SectionSubheading } from "../common/section";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useGoogleReviews } from "@/hooks/review/use-google-reviews";
import { Button } from "../ui/button";
import Link from "next/link";

const VIEW_ALL_BUTTON = {
    label: "View All",
    href: "https://share.google/chF3gxOsH7tNfC55l",
};

export function TestimonialSection() {
    const { data } = useGoogleReviews();
    return (
        <SectionContainer className="flex w-full flex-col items-center justify-center gap-5 text-center">
            <Badge>TESTIMONIALS</Badge>
            <SectionHeading>Real People. Real Success.</SectionHeading>
            <SectionSubheading className="max-w-xl">
                Behind every visa is a story of courage, trust, and success. These are just a few of them.
            </SectionSubheading>
            {data?.reviews.length && data?.reviews.length > 0 && (
                <div className="group relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="flex w-max items-stretch gap-5 py-10 group-hover:[animation-play-state:paused]"
                    >
                        {[...data.reviews, ...data.reviews].map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial.text}
                                full_name={testimonial.author_name}
                                image={testimonial.profile_photo_url}
                            />
                        ))}
                    </motion.div>
                </div>
            )}
            <div className="flex items-center justify-center">
                <Button variant="outline" size="xl" asChild>
                    <Link href={VIEW_ALL_BUTTON.href}>{VIEW_ALL_BUTTON.label}</Link>
                </Button>
            </div>
        </SectionContainer>
    );
}

interface TestimonialCardProps {
    testimonial: string;
    full_name: string;
    designation?: string;
    image?: string;
}

export function TestimonialCard({ testimonial, full_name, designation, image }: TestimonialCardProps) {
    return (
        <div className="flex h-min max-w-[320px] min-w-[300px] flex-col items-center justify-start gap-16 rounded-3xl bg-neutral-100 p-8">
            <div className="flex h-min w-full items-start justify-center gap-4">
                <Icons.Quote className="text-primary-400 size-8 shrink-0" />
                <p className="line-clamp-4 text-left text-lg leading-[1.4em] tracking-[-0.5px] text-neutral-700">
                    {testimonial}
                </p>
            </div>
            <div className="flex h-min w-full items-end justify-between gap-4">
                <div className="flex h-min w-full flex-col items-start justify-start text-left">
                    <p className="text-base leading-[1.4em] tracking-[-0.5px] text-neutral-950">{full_name}</p>
                    <p className="text-base leading-[1.4em] tracking-[-0.5px] text-neutral-700">{designation}</p>
                </div>
                <div className="relative flex size-20 shrink-0 items-center justify-center rounded-2xl">
                    <Image
                        src={image ? image : "/images/testimonials/default.png"}
                        alt="default png"
                        fill
                        className="h-full w-full shrink-0 rounded-2xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
