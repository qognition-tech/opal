"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { Variants } from "motion/react";
import { Button } from "../ui/button";
import { ActionButton } from "../ui/action-button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const containerVariants: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const itemVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const buttonVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const imageVariants: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};

// CONSTANTS
const PRIMARY_BUTTON = {
    label: "Book a Consultation",
    href: "https://cal.com/opalconsulting?theme=light",
};
const SECONDARY_BUTTON = {
    label: "Learn More",
    href: "/blogs",
};

function HeroContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="md-lg:items-start md-lg:text-left md-lg:p-12 flex h-full w-full flex-1 flex-col items-center justify-center gap-10 p-4 pt-8 text-center md:p-8"
        >
            <motion.div variants={itemVariants} className="flex flex-col gap-8">
                <h1 className="font-albert-sans lg-xl:text-[3.5rem] md-lg:text-[2.5rem] xs:text-[2rem] text-[1.6rem] leading-[1.1em] tracking-[-0.05em] whitespace-nowrap text-neutral-950 lg:text-[3rem]">
                    Your Global <span className="text-primary-900">Education</span> <br /> &{" "}
                    <span className="text-primary-900">Immigration</span> Partner
                </h1>
                <p className="tracing lg-xl:text-xl text-base leading-[1.4em] tracking-[-0.5px] text-neutral-700 lg:text-lg">
                    Personalized education and migration guidance, <br />
                    helping 1200+ clients achieve their global ambitions.
                </p>
            </motion.div>
            <motion.div
                variants={buttonVariants}
                className="flex items-center justify-center gap-4 max-md:flex-col max-md:gap-2"
            >
                <ActionButton
                    text={PRIMARY_BUTTON.label}
                    href={PRIMARY_BUTTON.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex h-12 text-sm font-normal max-md:h-10 max-md:gap-1.5 max-md:text-sm max-md:has-[>svg]:px-2.5 md:text-base md:leading-[1.1em] md:tracking-[-0.5px]"
                    iconContainerWrapperClassName="size-8 bg-primary-200 max-md:size-6"
                    iconClassName="size-5 max-md:size-3.5"
                    iconContainerClassName="group-hover:translate-x-7"
                />
                <Button
                    size="xl"
                    variant="primary-outline"
                    className="h-12 rounded-full border-2 bg-transparent text-sm font-normal max-md:h-10 max-md:gap-1.5 max-md:px-4 max-md:has-[>svg]:px-2.5 md:text-base md:leading-[1.1em] md:tracking-[-0.5px]"
                    asChild
                >
                    <Link href={SECONDARY_BUTTON.href}>{SECONDARY_BUTTON.label}</Link>
                </Button>
            </motion.div>
        </motion.div>
    );
}

function HeroImage() {
    return (
        <div className="relative h-full w-full flex-1">
            <motion.div
                variants={imageVariants}
                initial="initial"
                animate="animate"
                className="absolute top-0 left-0 h-full w-full origin-bottom"
            >
                <div className="relative flex h-full w-full items-end">
                    <Image
                        src="/images/hero-main-student-aus.png"
                        alt="hero-main-student"
                        width={1000}
                        height={1000}
                        priority
                        className="h-auto max-h-full w-full object-contain object-bottom"
                    />
                </div>
            </motion.div>
        </div>
    );
}

export function HeroSection({ className }: { className?: string }) {
    return (
        <section
            className={cn(
                "md-lg:max-h-[520px] mx-auto h-[calc(100svh-10.5rem)] w-full max-w-7xl px-4 max-sm:h-[calc(100svh-7.5rem)] lg:max-h-[700px]",
                className,
            )}
        >
            <div className="md-lg:flex-row md-lg:pr-12 flex h-full w-full flex-col items-center justify-center rounded-2xl bg-[url('/images/stripe-background.svg')] bg-cover bg-center">
                <HeroContent />
                <HeroImage />
            </div>
        </section>
    );
}
