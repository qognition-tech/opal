import * as motion from "motion/react-client";
import { Variants } from "motion/react";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.2,
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

interface HeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export function Header({ title, className }: HeaderProps) {
    return (
        <header className={cn("mx-auto w-full max-w-7xl px-4", className)}>
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[url('/images/stripe-background.svg')] bg-cover bg-center">
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center justify-center p-8 text-center"
                >
                    <motion.div variants={itemVariants}>
                        <h1 className="font-albert-sans text-primary-950 xs:text-[2rem] text-[1.6rem] leading-[1.1em] tracking-[-0.05em] sm:text-[2.5rem] lg:text-[3rem]">
                            {title}
                        </h1>
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
}
