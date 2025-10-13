"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { SectionContainer, SectionHeading, SectionSubheading } from "../common/section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SERVICES = [
    {
        title: "Visa Assistance",
        description:
            "Our experts handle the complexities of student, skilled, work, and family visas—so you can focus on your future, not the paperwork.",
        image: "/images/cards/card-01.jpg",
        action: "/blogs",
    },
    {
        title: "Coaching & Test Prep",
        description:
            "Prepare with tailored coaching for IELTS, PTE, and other language proficiency tests. Build the confidence and scores you need for visa and university acceptance.",
        image: "/images/cards/card-09.jpg",
        action: "/blogs",
    },
    {
        title: "Career Counselling",
        description:
            "Get personalized advice on courses, skill recognition, and career opportunities that align with your goals—ensuring your investment leads to real outcomes.",
        image: "/images/cards/card-10.jpg",
        action: "/blogs",
    },
    {
        title: "Settlement Support",
        description:
            "From airport pickup and temporary accommodation to ongoing guidance, we make your transition to life abroad stress-free and comfortable.",
        image: "/images/cards/card-04.jpg",
        action: "/blogs",
    },
];

export function ServicesSection() {
    const router = useRouter();
    return (
        <SectionContainer className="flex w-full flex-col items-center justify-center gap-5 text-center">
            <Badge>SERVICES</Badge>
            <SectionHeading>Your Pathway, Simplified</SectionHeading>
            <SectionSubheading className="max-w-[600px]">
                Expert support across visas, test prep, career planning, and settlement—so your move abroad is smooth
                and stress-free.
            </SectionSubheading>
            <div className="grid-rows-auto lg-xl:grid-cols-2 lg-xl:grid-rows-2 grid w-full grid-cols-1 content-center items-center justify-items-center gap-4">
                {SERVICES.map((item) => (
                    <div
                        key={item.title}
                        className="bg-primary-100 group flex max-w-[656px] items-stretch gap-4 rounded-[20px] p-2 max-sm:flex-col"
                    >
                        <div className="relative w-48 shrink-0 overflow-hidden rounded-2xl max-sm:h-48 max-sm:w-full">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="rounded-2xl object-cover object-center transition-all duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex h-full flex-col items-start justify-between gap-5 p-4 text-left">
                                <div className="flex flex-col items-start justify-start gap-5">
                                    <h3 className="font-albert-sans text-[26px] leading-[1.3em] tracking-[-0.05em] text-neutral-950">
                                        {item.title}
                                    </h3>
                                    <p className="text-base leading-[1.4em] tracking-[-0.5px] text-neutral-700">
                                        {item.description}
                                    </p>
                                </div>
                                <Button variant="primary-outline" size="icon" onClick={() => router.push(item.action)}>
                                    <ArrowUpRightIcon className="size-4 shrink-0" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
