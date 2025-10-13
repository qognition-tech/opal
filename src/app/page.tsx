import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { HeroSection } from "@/components/home/hero-section";
import { PromiseSection } from "@/components/home/promise-section";
import { ServicesSection } from "@/components/home/services-section";
import { FirstCtaSection } from "@/components/home/first-cta-section";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { FaqSection } from "@/components/home/faq-section";
import { BlogsSection } from "@/components/home/blogs-section";
import { SecondCtaSection } from "@/components/home/second-cta-section";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full flex-col gap-4">
            <Navbar />
            <main className="flex w-full flex-col gap-4 pt-[132px]">
                <HeroSection />
                <PromiseSection />
                <ServicesSection />
                <FirstCtaSection />
                <TestimonialSection />
                <FaqSection />
                <BlogsSection />
                <SecondCtaSection />
            </main>
            <Footer />
        </div>
    );
}
