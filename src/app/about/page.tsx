import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Navbar } from "@/components/common/navbar";
import { SectionContainer } from "@/components/common/section";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Opal Consulting | Registered Migration Agents Sydney",
    description:
        "Learn about Opal Consulting — Sydney's leading registered migration agency helping students, families, and professionals migrate to Australia.",
    alternates: {
        canonical: "https://www.opalconsulting.com.au/about",
    },
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen w-full flex-col gap-4">
            <Navbar />
            <div className="flex w-full flex-col gap-4 pt-[132px]">
                <Header title="About Opal Consulting" />
                <AboutBody />
            </div>
            <Footer />
        </div>
    );
}

function AboutBody() {
    return (
        <SectionContainer className="flex flex-col gap-20 py-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="flex flex-col gap-6">
                    <h2 className="font-albert-sans text-3xl leading-[1.1em] tracking-[-0.05em] text-neutral-950 md:text-[2.25rem]">
                        The Founding Vision
                    </h2>
                    <div className="relative aspect-[3/4] w-full rounded-2xl md:hidden">
                        <Image
                            src="/images/about/biwek_thapa.jpg"
                            alt="Biwek Thapa - Founder of Opal Consulting"
                            fill
                            className="rounded-2xl object-cover object-top"
                        />
                    </div>
                    <p className="font-geist text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-600">
                        Opal Consulting was founded by Biwek Thapa in 2008. Biwek arrived in Australia in 1996 as an
                        international student and achieved a Diploma and a Bachelor’s Degree in IT. After a successful
                        career in the IT industry, Biwek decided to apply his skills and experience to help
                        international students and others on the path to Australia.
                    </p>
                    <p className="font-geist text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-600">
                        He received a Graduate Certificate in Migration Law and Practice from the Australian National
                        University and is a Registered Migration Agent. In 2008, Opal Consulting opened offices in Nepal
                        and Australia to assist people in both countries with their migration and study needs. It
                        currently has offices in Sydney and Kathmandu.
                    </p>
                    <p className="font-geist text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-600">
                        Besides managing Opal Consulting, Biwek is an active member of the Nepalese community in Sydney.
                        He is immediate past president of Nepalese Australian Democratic Forum (NADF), current advisor
                        and past executive member of NRNA (Non-Resident Nepali Association) Australia, and the founding
                        president and current advisor of Australian Education Consultants’ Alliance (AECA). He is also a
                        community representative on the board of Migration Alliance and serves as a Vice-Chairman of the
                        Liberal Friends of Nepal (LFoN).
                    </p>
                </div>
                <div className="relative hidden max-h-[600px] w-full overflow-hidden rounded-2xl md:block">
                    <Image
                        src="/images/about/biwek_thapa.jpg"
                        alt="Biwek Thapa - Founder of Opal Consulting"
                        fill
                        className="object-cover object-top"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="relative hidden aspect-[16/9] h-[400px] w-full overflow-hidden rounded-2xl md:block">
                    <Image
                        src="/images/about/opal-office.webp"
                        alt="Opal Consulting Team"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="font-albert-sans text-3xl leading-[1.1em] tracking-[-0.05em] text-neutral-950 md:text-[2.25rem]">
                        A Personal Mission Driven by Experience
                    </h2>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl md:hidden">
                        <Image
                            src="/images/about/opal-office.webp"
                            alt="Opal Consulting Team"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                    <p className="font-geist text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-600">
                        Biwek Thapa came to Australia in April 1996 as an international student, and he went through the
                        entire Australian visa system himself. In 1998 his student visa was cancelled, but after
                        passionately arguing his case at the Tribunal, he was given a second chance.
                    </p>
                    <p className="font-geist text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-600">
                        After completing his IT degree, Biwek became a permanent resident in 2003 and is now an
                        Australian citizen. Because of his own experience, Biwek is driven and passionate about speaking
                        on behalf of and fighting for international students and migrants.
                    </p>
                    <p className="font-geist text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-600">
                        He has become an expert in the migration industry and was even interviewed on Australian
                        television (ABC, July 2009 on the programme Four Corners) about his work solving problems for
                        international students from Nepal. He prides himself on his ability to communicate clearly and
                        effectively to improve his clients chances of success.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="flex flex-col gap-6">
                    <h2 className="font-albert-sans text-3xl leading-[1.1em] tracking-[-0.05em] text-neutral-950 md:text-[2.25rem]">
                        Expertise, Passion, and Community
                    </h2>
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl md:hidden">
                        <Image
                            src="/images/about/opal-awards.jpg"
                            alt="Community involvement"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                    <blockquote className="font-geist border-l-4 border-neutral-200 pl-4 text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-700 italic">
                        &quot;I am absolutely passionate about solving visa or migration problems for international
                        students and migrants in Australia. I like to listen to people’s problems and to think outside
                        the box so that I can help to solve those problems.&quot; - Biwek Thapa
                    </blockquote>
                    <p className="font-geist text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-600">
                        Biwek works 16 to 18 hours a day on his client’s cases, spending many hours researching the law
                        and similar cases. He is very active in the Nepalese community through general volunteering and
                        social work.
                    </p>
                    <div className="font-geist text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-600">
                        <h3 className="mb-2 text-lg font-medium text-neutral-950">Community Profile:</h3>
                        <ul className="list-disc pl-5">
                            <li>Founding President of Australian Education Consultants&apos; Alliance (AECA)</li>
                            <li>Current national co-ordinator of Non-Resident Nepali Association Australia (NRNAA)</li>
                            <li>Past President of Nepalese Australian Association (NAA)</li>
                            <li>
                                Founder Member and Past President of nadf.org.au (NADF: Nepalese Australian Democratic
                                Forum)
                            </li>
                            <li>Founder Deputy Chairperson of Liberal Friends of Nepal (LFoN)</li>
                            <li>Current board member as a community representative of the Migration Alliance</li>
                            <li>
                                Current Member of Connect FM 100.9, a community radio station serving Bankstown and
                                Auburn in Sydney
                            </li>
                        </ul>
                    </div>
                    <p className="font-geist text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-600">
                        Biwek has a Diploma of IT, Bachelor of Business (Computing and Information Systems) and Graduate
                        Certificate in Migration Law and Practice. He finished his law degree (Bachelor of Laws) from
                        University of New England in Australia in December 2022.
                    </p>
                    <p className="font-geist text-lg leading-[1.5em] tracking-[-0.02em] text-neutral-600">
                        Biwek heads a team of highly motivated, hardworking and trustworthy experts. His passion drives
                        his entire team to work tirelessly, ensuring you have the best possible chance of fulfilling
                        your dreams of studying, working and living in Australia.
                    </p>
                </div>
                <div className="relative hidden aspect-[3/4] w-full overflow-hidden rounded-2xl md:block">
                    <Image
                        src="/images/about/opal-awards.jpg"
                        alt="Community involvement"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </SectionContainer>
    );
}
