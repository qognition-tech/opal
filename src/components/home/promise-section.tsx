import { ShieldCheckIcon, StarIcon } from "@heroicons/react/24/solid";
import { SectionContainer, SectionHeading, SectionSubheading } from "../common/section";
import { Badge } from "../ui/badge";
import { CheckIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const EXPERIENCE = {
    years: "15+",
    text: "Years of Experience",
};

const STATS = [
    {
        value: "1200+",
        label: "Satisfied Clients",
    },
    {
        value: "48Hrs",
        label: "Approval Time",
    },
];

const HIGHLIGHTS = [
    {
        title: "5-Star Service Guarantee",
        points: ["Always top-rated care", "Money-back if not 5-star"],
    },
    {
        title: "Peace of Mind Promise",
        points: ["Stress-free process", "Transparency"],
    },
];

export function PromiseSection() {
    return (
        <SectionContainer className="lg-xl:flex-row lg-xl:items-end max-lg-xl:items-center max-lg-xl:justify-center w-full flex-col-reverse items-start gap-8">
            <div className="max-lg-xl:items-center max-lg-xl:justify-center flex min-h-[35rem] w-full flex-1 shrink-0 flex-grow items-stretch justify-center gap-4 max-sm:flex-col-reverse">
                <div className="flex w-full max-w-[320px] flex-1 flex-col gap-4 sm:min-w-[294px]">
                    <PromiseCard title="5-Star Service Guarantee" image="/images/trust-stack-card-01.svg" />
                    <div className="flex w-full flex-wrap items-center justify-center gap-2">
                        {STATS.map((item) => (
                            <div key={item.label} className="flex flex-col items-center justify-center p-2">
                                <h3 className="font-albert-sans text-center text-3xl leading-[1.3em] tracking-[-0.05em] text-neutral-950">
                                    {item.value}
                                </h3>
                                <p className="text-center text-sm leading-[1.4em] tracking-[-0.5px] text-neutral-700">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full max-w-[320px] flex-1 flex-grow flex-col gap-4 sm:min-w-[294px]">
                    <div className="bg-primary-700 font-albert-sans flex w-full items-center justify-center gap-2 rounded-[20px] px-5 py-8">
                        <h3 className="text-5xl leading-[1.3em] tracking-[-0.05em] text-neutral-50">
                            {EXPERIENCE.years}
                        </h3>
                        <span className="w-min text-lg leading-[1.4em] tracking-[-0.5px] text-neutral-50">
                            {EXPERIENCE.text}
                        </span>
                    </div>
                    <div className="flex-grow">
                        <PromiseCard title="Peace of Mind Promise" image="/images/trust-stack-card-02.svg" />
                    </div>
                </div>
            </div>
            <div className="max-lg-xl:items-center max-lg-xl:justify-center flex w-full max-w-[656px] flex-col items-start justify-center gap-5">
                <Badge>OUR PROMISE</Badge>
                <SectionHeading className="text-center">Your Journey, Our Mission</SectionHeading>
                <SectionSubheading className="max-lg-xl:text-center">
                    Your journey deserves more than paperwork — it deserves confidence. At Opal, we simplify the
                    complex, fight for your success, and guide you with care at every step.
                </SectionSubheading>
                <div className="max-lg-xl:flex-row max-lg-xl:items-center max-lg-xl:justify-center mt-5 flex w-full flex-row items-stretch justify-center gap-5 max-[75rem]:flex-col max-sm:flex-col">
                    <div
                        key={HIGHLIGHTS[0].title}
                        className="border-primary-100 flex w-full max-w-[360px] flex-1 flex-col justify-start gap-5 rounded-[20px] border-2 p-5"
                    >
                        <div className="flex w-full flex-col items-start justify-start gap-5">
                            <div className="flex w-full items-center justify-start gap-2">
                                <div className="bg-primary-100 flex shrink-0 items-center justify-center rounded-full p-2 sm:p-4">
                                    <StarIcon className="text-primary-700 size-6 shrink-0 sm:size-8" />
                                </div>
                                <h3 className="font-albert-sans text-2xl leading-[1.3em] tracking-[-0.05em] text-neutral-950">
                                    {HIGHLIGHTS[0].title}
                                </h3>
                            </div>
                        </div>

                        {HIGHLIGHTS[0].points.length > 0 && (
                            <div className="flex w-full flex-col items-start justify-center gap-2 text-left">
                                {HIGHLIGHTS[0].points.map((detail, index) => (
                                    <div key={index} className="flex items-center justify-start gap-2">
                                        <CheckIcon className="text-primary-700 size-4 shrink-0" />
                                        <p className="text-base leading-[1.4em] tracking-[-0.5px] text-neutral-700">
                                            {detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Second Promise Card */}
                    <div
                        key={HIGHLIGHTS[1].title}
                        className="border-primary-100 flex w-full max-w-[360px] flex-1 flex-col justify-start gap-5 rounded-[20px] border-2 p-5"
                    >
                        <div className="flex w-full flex-col items-start justify-start gap-5">
                            <div className="flex w-full items-center justify-start gap-2">
                                <div className="bg-primary-100 flex shrink-0 items-center justify-center rounded-full p-2 sm:p-4">
                                    <ShieldCheckIcon className="text-primary-700 size-6 shrink-0 sm:size-8" />
                                </div>
                                <h3 className="font-albert-sans text-2xl leading-[1.3em] tracking-[-0.05em] text-neutral-950">
                                    {HIGHLIGHTS[1].title}
                                </h3>
                            </div>
                        </div>

                        {HIGHLIGHTS[1].points.length > 0 && (
                            <div className="flex w-full flex-col items-start justify-center gap-2 text-left">
                                {HIGHLIGHTS[1].points.map((detail, index) => (
                                    <div key={index} className="flex items-center justify-start gap-2">
                                        <CheckIcon className="text-primary-700 size-4 shrink-0" />
                                        <p className="text-base leading-[1.4em] tracking-[-0.5px] text-neutral-700">
                                            {detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}

function PromiseCard({ title, image }: { title: string; image: string }) {
    return (
        <div className="relative h-full w-full rounded-[20px]">
            <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                className="h-full w-full scale-95 rounded-[20px] object-cover"
            />
            <div className="absolute inset-0 rounded-[20px] shadow-[inset_2px_2px_16px_2px_var(--color-primary-200),inset_-2px_-2px_16px_2px_var(--color-primary-200)]" />
        </div>
    );
}
