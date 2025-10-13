import Link from "next/link";
import Vector from "@/assets/vector.svg";
import { SectionContainer, SectionHeading, SectionSubheading } from "../common/section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const SECOND_CTA_SECTION = {
    title: "Your future starts today",
    description: "Join 1200+ clients who trusted us to achieve their global goals.",
    primaryButton: {
        label: "Start Your Journey",
        href: "https://cal.com/opalconsulting?theme=light",
    },
    secondaryButton: {
        label: "Contact us",
        href: "/contact",
    },
};

export function SecondCtaSection() {
    return (
        <SectionContainer>
            <div
                className="bg-primary-700 xs:px-10 flex flex-col items-center justify-center gap-5 rounded-[20px] px-5 py-32 text-center md:px-20 md:py-32"
                style={{
                    backgroundImage: `url(${Vector.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Badge variant="outline">LET&apos;S BEGIN</Badge>
                <SectionHeading className="text-[2.875rem] leading-[1.1em] tracking-[-0.05em] text-neutral-50 md:text-[3.25rem] xl:text-[3.5rem]">
                    {SECOND_CTA_SECTION.title}
                </SectionHeading>
                <SectionSubheading className="max-w-xl text-neutral-100 md:text-xl">
                    {SECOND_CTA_SECTION.description}
                </SectionSubheading>
                <div className="flex w-full flex-col items-center justify-center gap-4 pt-5 sm:flex-row">
                    <Button
                        variant="default"
                        size="xl"
                        asChild
                        className="text-primary-700 bg-neutral-50 text-base shadow-xs hover:bg-neutral-50/90"
                    >
                        <Link href={SECOND_CTA_SECTION.primaryButton.href}>
                            {SECOND_CTA_SECTION.primaryButton.label}
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="xl"
                        asChild
                        className="bg-primary-700 hover:bg-primary-700/90 border-2 text-neutral-50"
                    >
                        <Link href={SECOND_CTA_SECTION.secondaryButton.href} target="_blank" rel="noopener noreferrer">
                            {SECOND_CTA_SECTION.secondaryButton.label}
                        </Link>
                    </Button>
                </div>
            </div>
        </SectionContainer>
    );
}
