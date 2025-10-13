"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { PlusIcon } from "@heroicons/react/24/solid";

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return (
        <AccordionPrimitive.Root
            data-slot="accordion"
            {...props}
            className="bg-primary-50 flex h-min w-full flex-col items-start justify-start gap-2 rounded-3xl p-2"
        />
    );
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn(
                "flex h-min w-full flex-col items-start justify-start gap-4 rounded-[20px] bg-neutral-50 p-8 transition-all duration-300 hover:drop-shadow-xl data-[state=open]:drop-shadow-xl",
                className,
            )}
            {...props}
        />
    );
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex w-full items-center justify-between">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "focus-visible:text-primary-900 font-albert-sans flex flex-1 cursor-pointer items-start justify-between gap-4 text-left text-xl leading-[1.3em] tracking-[-0.04em] text-neutral-950 transition-all outline-none hover:underline disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-450",
                    className,
                )}
                {...props}
            >
                {children}
                <PlusIcon className="text-primary-500 pointer-events-none size-6 shrink-0 transition-transform duration-400 ease-in-out" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-base leading-[1.4em] tracking-[-0.5px] text-neutral-500"
            {...props}
        >
            <div className={cn("p-0", className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
