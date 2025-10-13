import Link from "next/link";
import Vector from "@/assets/vector.svg";
import { SectionContainer, SectionHeading, SectionSubheading } from "../common/section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import * as motion from "motion/react-client";

const FIRST_CTA_SECTION = {
    title: "Turn your plans into action",
    description: "Book a free consultation and discover how we can simplify your journey.",
    images: [
        "/images/cards/card-01.jpg",
        "/images/cards/card-02.jpg",
        "/images/cards/card-03.jpg",
        "/images/cards/card-04.jpg",
        "/images/cards/card-05.jpg",
        "/images/cards/card-06.jpg",
        "/images/cards/card-07.jpg",
        "/images/cards/card-08.jpg",
    ],
    button: {
        label: "Get your free assessment",
        href: "/contact",
    },
};

export function FirstCtaSection() {
    return (
        <SectionContainer>
            <div
                className="bg-primary-700 flex h-min flex-col items-start justify-start gap-5 rounded-[20px] py-5 lg:flex-row lg:items-start lg:justify-between lg:px-5"
                style={{
                    backgroundImage: `url(${Vector.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex max-w-xl flex-col items-start justify-start gap-5 px-10 py-20 max-sm:items-center max-sm:justify-center max-sm:text-center">
                    <Badge variant="outline">GET STARTED</Badge>
                    <SectionHeading className="text-[2.375rem] leading-[1.1em] tracking-[-0.05em] text-neutral-50 md:text-[2.75rem] xl:text-[3rem]">
                        {FIRST_CTA_SECTION.title}
                    </SectionHeading>
                    <SectionSubheading className="max-w-xl text-neutral-100 md:text-xl">
                        {FIRST_CTA_SECTION.description}
                    </SectionSubheading>
                    <Button
                        variant="default"
                        size="xl"
                        asChild
                        className="text-primary-700 bg-neutral-50 text-base shadow-xs hover:bg-neutral-50/90"
                    >
                        <Link href={FIRST_CTA_SECTION.button.href}>{FIRST_CTA_SECTION.button.label}</Link>
                    </Button>
                </div>
                <div className="z-10 w-full lg:w-fit">
                    <InfiniteMovingCards images={FIRST_CTA_SECTION.images} />
                </div>
            </div>
        </SectionContainer>
    );
}

const Card = ({ src }: { src: string }) => (
    <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-lg shadow-lg md:h-60 md:w-60 lg:h-80 lg:w-60">
        <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
);

export function InfiniteMovingCards({ images }: { images: string[] }) {
    const midpoint = Math.ceil(images.length / 2);
    const firstHalf = images.slice(0, midpoint);
    const secondHalf = images.slice(midpoint);

    return (
        <div className="relative h-min w-full overflow-hidden rounded-2xl [mask-image:linear-gradient(to_right,transparent_5%,#000_15%,#000_85%,transparent_95%)] lg:h-[600px] lg:w-fit lg:[mask-image:linear-gradient(to_bottom,transparent_5%,#000_20%,#000_80%,transparent_95%)]">
            {/* Mobile */}
            <div className="flex w-fit flex-col items-center justify-center gap-5 lg:hidden">
                <motion.div
                    className="flex w-max flex-row items-stretch gap-5"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...firstHalf, ...firstHalf].map((src, i) => (
                        <Card src={src} key={`mobile-1-${i}`} />
                    ))}
                </motion.div>
                <motion.div
                    className="flex w-max flex-row items-stretch gap-5"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...secondHalf, ...secondHalf].map((src, i) => (
                        <Card src={src} key={`mobile-2-${i}`} />
                    ))}
                </motion.div>
            </div>

            {/* Desktop */}
            <div className="hidden h-full w-fit flex-row items-stretch justify-center gap-5 lg:flex">
                <motion.div
                    className="flex h-max flex-col items-stretch gap-5"
                    animate={{ y: "-50%" }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...firstHalf, ...firstHalf].map((src, i) => (
                        <Card src={src} key={`desktop-1-${i}`} />
                    ))}
                </motion.div>
                <motion.div
                    className="flex h-max flex-col items-stretch gap-5"
                    initial={{ y: "-50%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                >
                    {[...secondHalf, ...secondHalf].map((src, i) => (
                        <Card src={src} key={`desktop-2-${i}`} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
