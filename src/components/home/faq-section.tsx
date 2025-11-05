import Link from "next/link";
import { SectionContainer, SectionHeading, SectionSubheading } from "../common/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const FAQS = [
    {
        question: "Why choose Opal Consulting?",
        answer: "We’re led by a MARA-registered migration agent, backed by a 5-star service guarantee, and trusted by thousands of successful clients.",
    },
    {
        question: "What visas do you handle?",
        answer: "Student, work, partner, parent, PR, tourist, refusals, cancellations — full support from study to settlement.",
    },
    {
        question: "How experienced is your team?",
        answer: "Founded in 2008 by Biwek Thapa, a registered migration agent who’s lived the student-to-PR journey himself.",
    },
    {
        question: "How long does a visa take?",
        answer: "Depends on the visa. For example, a Subclass 400 work visa averages 3–4 weeks with high chances of approval.",
    },
    {
        question: "What if my visa is refused?",
        answer: "We handle appeals, cancellations, and ministerial reviews — giving you the best shot at turning it around.",
    },
];

export function FaqSection() {
    return (
        <SectionContainer className="lg-xl:flex-row flex w-full flex-col gap-20">
            <div className="flex w-full max-w-[600px] flex-1 flex-col gap-5">
                <Badge>FAQs</Badge>
                <SectionHeading>Your questions, answered</SectionHeading>
                <SectionSubheading>
                    Get quick answers to the most common questions about our platform and services.
                </SectionSubheading>
                <Button variant="outline" size="xl" asChild>
                    <Link href="/contact">Contact us</Link>
                </Button>
            </div>
            <div className="flex w-full min-w-[58%] flex-1 flex-col gap-5">
                <Accordion type="multiple" className="w-full">
                    {FAQS.map((item) => (
                        <AccordionItem key={item.question} value={item.question}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </SectionContainer>
    );
}
