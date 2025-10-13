import { Footer } from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { SectionContainer } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen w-full flex-col gap-4">
            <Navbar />
            <SectionContainer className="flex flex-1 flex-col items-center justify-center py-32 text-center">
                <h1 className="font-albert-sans text-6xl font-bold tracking-tight text-neutral-950">404</h1>
                <h2 className="font-albert-sans mt-4 text-2xl font-medium tracking-tight text-neutral-950">
                    Page Not Found
                </h2>
                <p className="mt-2 max-w-md text-lg text-neutral-600">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link href="/" className="mt-8">
                    <Button size="lg">Go Back Home</Button>
                </Link>
            </SectionContainer>
            <Footer />
        </div>
    );
}
