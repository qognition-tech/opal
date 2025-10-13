import Link from "next/link";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import { Variants } from "motion";
import { PhoneIcon, EnvelopeIcon, ShieldCheckIcon } from "@heroicons/react/16/solid";
import { Separator } from "@/components/ui/separator";
import React from "react";

const marqueeVariants: Variants = {
    animate: {
        x: [0, -914.41],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 7,
                ease: "linear",
            },
        },
    },
};

export function AnnouncementBar({ className }: { className?: string }) {
    const CONTACTS = [
        {
            label: "Sydney: (02) 8188 0740",
            href: "tel:+61281880740",
        },
        {
            label: "Kathmandu: +977 14528794",
            href: "tel:+97714528794",
        },
        {
            label: "India: +91 8527661110",
            href: "tel:+918527661110",
        },
    ];

    return (
        <div className={cn("from-primary-700 to-primary-900 w-full bg-gradient-to-r text-neutral-50", className)}>
            <div className="lg-xl:flex mx-auto hidden max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-sm">
                {/* Contact Information */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        {CONTACTS.map((contact) => (
                            <React.Fragment key={contact.label}>
                                <PhoneIcon className="size-4" />
                                <Link href={contact.href} className="transition-all duration-200 hover:underline">
                                    {contact.label}
                                </Link>
                                <Separator
                                    orientation="vertical"
                                    className="bg-primary-950 !h-3 !w-0.5 rounded-full last:hidden"
                                />
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <EnvelopeIcon className="size-4" />
                        <Link
                            href="mailto:info@opalconsulting.com.au"
                            className="transition-all duration-200 hover:underline"
                        >
                            info@opalconsulting.com.au
                        </Link>
                    </div>
                </div>

                {/* Registration Information */}
                <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="size-4" />
                    <span>MARN 0747526</span>
                    <Separator orientation="vertical" className="bg-primary-950 !h-3 !w-0.5 rounded-full" />
                    <Link
                        href="https://www.mara.gov.au/tools-for-registered-agents/code-of-conduct"
                        target="_blank"
                        className="transition-all duration-200 hover:underline"
                    >
                        Code of Conduct
                    </Link>
                </div>
            </div>

            <div className="lg-xl:hidden flex items-center justify-center gap-4 overflow-hidden py-1.5 text-sm">
                <motion.div
                    variants={marqueeVariants}
                    className="flex items-center justify-center gap-4 whitespace-nowrap"
                    animate="animate"
                >
                    {/* Contact Information */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            {CONTACTS.map((contact) => (
                                <React.Fragment key={contact.label}>
                                    <PhoneIcon className="size-4" />
                                    <Link href={contact.href} className="transition-all duration-200 hover:underline">
                                        {contact.label}
                                    </Link>
                                    <Separator
                                        orientation="vertical"
                                        className="bg-primary-950 !h-3 !w-0.5 rounded-full last:hidden"
                                    />
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <EnvelopeIcon className="size-4" />
                            <Link
                                href="mailto:info@opalconsulting.com.au"
                                className="transition-all duration-200 hover:underline"
                            >
                                info@opalconsulting.com.au
                            </Link>
                        </div>
                    </div>

                    {/* Registration Information */}
                    <div className="flex items-center gap-2">
                        <ShieldCheckIcon className="size-4" />
                        <span>MARN 0747526</span>
                        <Separator orientation="vertical" className="bg-primary-950 !h-3 !w-0.5 rounded-full" />
                        <Link
                            href="https://www.mara.gov.au/tools-for-registered-agents/code-of-conduct"
                            target="_blank"
                            className="transition-all duration-200 hover:underline"
                        >
                            Code of Conduct
                        </Link>
                    </div>

                    {/* Contact Information */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            {CONTACTS.map((contact) => (
                                <React.Fragment key={contact.label}>
                                    <PhoneIcon className="size-4" />
                                    <Link href={contact.href} className="transition-all duration-200 hover:underline">
                                        {contact.label}
                                    </Link>
                                    <Separator
                                        orientation="vertical"
                                        className="bg-primary-950 !h-3 !w-0.5 rounded-full last:hidden"
                                    />
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <EnvelopeIcon className="size-4" />
                            <Link
                                href="mailto:info@opalconsulting.com.au"
                                className="transition-all duration-200 hover:underline"
                            >
                                info@opalconsulting.com.au
                            </Link>
                        </div>
                    </div>

                    {/* Registration Information */}
                    <div className="flex items-center gap-2">
                        <ShieldCheckIcon className="size-4" />
                        <span>MARN 0747526</span>
                        <Separator orientation="vertical" className="bg-primary-950 !h-3 !w-0.5 rounded-full" />
                        <Link
                            href="https://www.mara.gov.au/tools-for-registered-agents/code-of-conduct"
                            target="_blank"
                            className="transition-all duration-200 hover:underline"
                        >
                            Code of Conduct
                        </Link>
                    </div>

                    {/* Contact Information */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            {CONTACTS.map((contact) => (
                                <React.Fragment key={contact.label}>
                                    <PhoneIcon className="size-4" />
                                    <Link href={contact.href} className="transition-all duration-200 hover:underline">
                                        {contact.label}
                                    </Link>
                                    <Separator
                                        orientation="vertical"
                                        className="bg-primary-950 !h-3 !w-0.5 rounded-full last:hidden"
                                    />
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <EnvelopeIcon className="size-4" />
                            <Link
                                href="mailto:info@opalconsulting.com.au"
                                className="transition-all duration-200 hover:underline"
                            >
                                info@opalconsulting.com.au
                            </Link>
                        </div>
                    </div>

                    {/* Registration Information */}
                    <div className="flex items-center gap-2">
                        <ShieldCheckIcon className="size-4" />
                        <span>MARN 0747526</span>
                        <Separator orientation="vertical" className="bg-primary-950 !h-3 !w-0.5 rounded-full" />
                        <Link
                            href="https://www.mara.gov.au/tools-for-registered-agents/code-of-conduct"
                            target="_blank"
                            className="transition-all duration-200 hover:underline"
                        >
                            Code of Conduct
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
