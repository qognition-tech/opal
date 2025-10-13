import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-3 py-1.75 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary-700 hover:bg-primary-700/90 focus-visible:border-primary-400 focus-visible:ring-primary-400/50 border-transparent text-neutral-50",
                secondary:
                    "border-transparent bg-neutral-200 text-neutral-950 hover:bg-neutral-200/90 focus-visible:border-neutral-400 focus-visible:ring-neutral-400/50",
                default:
                    "border-transparent bg-neutral-950 text-neutral-50 shadow-xs hover:bg-neutral-950/90 focus-visible:border-neutral-400 focus-visible:ring-neutral-400/50",
                destructive:
                    "bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 border-transparent text-neutral-50",
                outline:
                    "border border-neutral-200 bg-neutral-50 text-neutral-950 hover:bg-neutral-100/50 focus-visible:border-neutral-400 focus-visible:ring-neutral-400/50",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    },
);

function Badge({
    className,
    variant,
    asChild = false,
    ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot : "span";

    return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
