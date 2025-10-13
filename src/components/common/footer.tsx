"use client";

import React from "react";
import Link from "next/link";
import { Icons } from "@/assets/icons";
import { SectionContainer } from "./section";
import { AtSymbolIcon } from "@heroicons/react/24/solid";
import { ShieldCheckIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useMigrationRoutes } from "@/hooks/wp/use-migration-routes";
import { useEducationRoutes } from "@/hooks/wp/use-education-routes";
import { Skeleton } from "../ui/skeleton";

const CONTACTS = [
    {
        name: "Sydney Office",
        address: "Suite 709, Level 7, 370 Pitt Street, Sydney NSW 2000",
        phones: ["(02) 8188 0740", "0431 092 046"],
        hours: "Monday to Friday 9am to 5pm",
        notes: "Closed during public holidays and weekends.",
    },
    {
        name: "Nepal Office",
        address: "3rd Floor, Laxmi Plaza Building, Corner of Putalisadak and Pradashani Margha Road, Kathmandu, Nepal",
        phones: ["+977 14528794", "+9779851147801"],
    },
    {
        name: "India Office",
        address: "Sikanderpur, Sector 26, Gurugram, Haryana 122002",
        phones: ["+91 8527661110"],
    },
];

export function Footer() {
    const { data: educationRoutes, isLoading: isEducationRoutesLoading } = useEducationRoutes();
    const { data: migrationRoutes, isLoading: isMigrationRoutesLoading } = useMigrationRoutes();

    return (
        <SectionContainer className="w-full pb-0 text-base leading-[1.4rem] tracking-[-0.5px] sm:px-4 md:px-4 xl:px-4">
            <div className="bg-primary-100 flex w-full flex-col gap-15 rounded-t-[20px] px-4 py-10 max-md:items-center max-md:justify-center max-md:gap-20 sm:px-10">
                <div className="flex w-full flex-col items-start justify-between gap-10 max-md:items-center max-md:justify-center max-md:gap-20 md:flex-row">
                    <div className="flex flex-col items-start justify-start gap-4 text-left max-md:items-center max-md:justify-center max-md:text-center">
                        <div className="flex w-full items-center justify-between">
                            <Icons.Logo className="size-20" />
                            <Link href="https://www.facebook.com/groups/1351565808361161" target="_blank">
                                <Icons.Facebook className="size-10" />
                            </Link>
                        </div>
                        <p className="max-w-[300px] text-base leading-[1.4rem] tracking-[-0.5px] text-neutral-700">
                            As registered immigration/migration agents in Sydney and Kathmandu & India, we help you to
                            achieve your dream of studying, working and living in this beautiful country, Australia.
                        </p>
                        <div className="flex flex-col items-start justify-start gap-2 text-left max-md:items-center max-md:justify-center max-md:text-center">
                            <span className="flex items-center gap-2 text-base text-neutral-700">
                                <ShieldCheckIcon className="size-5" />
                                <span className="font-medium text-neutral-950">MARN</span>
                                <span>0747526</span>
                            </span>

                            <span className="flex items-center gap-2 text-neutral-700">
                                <ShieldCheckIcon className="size-5" />
                                <span className="font-medium text-neutral-950">ABN </span>
                                <span>53137476012</span>
                            </span>

                            <span className="flex items-center gap-2 text-neutral-700">
                                <AtSymbolIcon className="size-5" />
                                <span className="font-medium text-neutral-950">info@opalconsulting.com.au</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-10 max-md:items-center max-md:justify-center max-md:gap-20 lg:flex-row">
                        <div className="flex flex-col items-start justify-start gap-2 text-left text-base leading-[1.4rem] tracking-[-0.5px] text-neutral-950 max-md:items-center max-md:justify-center max-md:text-center">
                            <span className="font-albert-sans mb-5 text-xl text-neutral-700">Information</span>
                            {isEducationRoutesLoading || isMigrationRoutesLoading ? (
                                <React.Fragment>
                                    <Skeleton className="h-6 w-56" />
                                    <Skeleton className="h-6 w-44" />
                                    <Skeleton className="h-6 w-60" />
                                    <Skeleton className="h-6 w-52" />
                                    <Skeleton className="h-6 w-48" />
                                    <Skeleton className="h-6 w-64" />
                                    <Skeleton className="h-6 w-56" />
                                    <Skeleton className="h-6 w-44" />
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {educationRoutes?.slice(0, 4).map((link) => (
                                        <Link
                                            key={link.slug}
                                            href={`/education/${link.slug}`}
                                            className="font-geist cursor-pointer text-lg text-neutral-950 transition-colors hover:underline"
                                        >
                                            {link.title.rendered}
                                        </Link>
                                    ))}
                                    {migrationRoutes?.slice(0, 3).map((link) => (
                                        <Link
                                            key={link.slug}
                                            href={`/migration/${link.slug}`}
                                            className="font-geist cursor-pointer text-lg text-neutral-950 transition-colors hover:underline"
                                        >
                                            {link.title.rendered}
                                        </Link>
                                    ))}
                                </React.Fragment>
                            )}
                        </div>
                        <div className="flex flex-col items-start justify-start gap-6 text-left text-base leading-[1.4rem] tracking-[-0.5px] text-neutral-950 max-md:items-center max-md:justify-center max-md:text-center">
                            <span className="font-albert-sans text-xl text-neutral-700">Get in touch</span>

                            {CONTACTS.map((contact) => (
                                <div
                                    key={contact.name}
                                    className="font-geist flex flex-col gap-2 max-md:items-center max-md:justify-center max-md:text-center"
                                >
                                    <div className="font-geist flex flex-col max-md:items-center max-md:justify-center max-md:text-center">
                                        <h3 className="mb-2 text-lg font-medium text-neutral-950">{contact.name}</h3>
                                        <p className="max-w-xs text-neutral-950">{contact.address}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        {contact.phones.map((phone) => (
                                            <span key={phone} className="flex items-center gap-1 text-neutral-950">
                                                <PhoneIcon className="size-4" />
                                                {phone}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-neutral-500">{contact.hours}</p>
                                        <p className="text-neutral-500">{contact.notes}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-2 text-center text-base leading-[1.4rem] tracking-[-0.5px] text-neutral-500 md:flex-row">
                    <span>
                        Copyright © Opal Consulting 2025.
                        <br /> All Right Reserved.
                    </span>
                    <span>
                        Powered by{" "}
                        <Link href="https://qognition.in/" target="_blank" className="text-neutral-950 hover:underline">
                            Qognition
                        </Link>
                    </span>
                </div>
            </div>
        </SectionContainer>
    );
}
