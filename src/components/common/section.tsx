import { cn } from "@/lib/utils";

export function SectionContainer({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={cn(
                "mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 md:px-16 xl:px-20",
                className,
            )}
        >
            {children}
        </div>
    );
}

export function SectionHeading({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <h2
            className={cn(
                "font-albert-sans text-[1.875rem] leading-[1.1em] tracking-[-0.05em] text-neutral-950 md:text-[2.25rem] xl:text-[2.5rem]",
                className,
            )}
        >
            {children}
        </h2>
    );
}

export function SectionSubheading({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <h3 className={cn("font-geist text-lg leading-[1.4em] tracking-[-0.5px] text-neutral-700", className)}>
            {children}
        </h3>
    );
}
