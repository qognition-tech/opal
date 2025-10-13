import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex w-fit shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default:
                    "bg-neutral-950 text-neutral-50 shadow-xs hover:bg-neutral-950/90 focus-visible:border-neutral-400 focus-visible:ring-neutral-400/50",
                destructive:
                    "bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 text-neutral-50 shadow-xs",
                outline:
                    "border border-neutral-200 bg-neutral-50 text-neutral-950 shadow-xs hover:bg-neutral-100/50 focus-visible:border-neutral-400 focus-visible:ring-neutral-400/50",
                primary:
                    "bg-primary-700 hover:bg-primary-700/90 focus-visible:border-primary-400 focus-visible:ring-primary-400/50 text-neutral-50 shadow-xs",
                "primary-outline":
                    "border-primary-600 text-primary-700 hover:bg-primary-700/10 focus-visible:border-primary-400 focus-visible:ring-primary-400/50 border bg-neutral-50 shadow-xs",
                ghost: "focus-visible:text-primary-700 text-neutral-950 hover:bg-neutral-100",
                link: "focus-visible:text-primary-700 underline-neutral-900 text-neutral-950 underline-offset-4 hover:underline focus-visible:ring-0",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                xl: "h-11 rounded-full px-4 py-2 text-base leading-[1.1em] tracking-[-0.5px] has-[>svg]:px-7",
                icon: "size-9",
                "small-icon": "size-8",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
