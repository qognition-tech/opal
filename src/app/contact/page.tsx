"use client";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Navbar } from "@/components/common/navbar";
import { SectionContainer, SectionHeading } from "@/components/common/section";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormSchema, ContactFormSchemaType } from "@/lib/schema";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    ClockIcon,
    EnvelopeIcon,
    PhoneIcon,
    UserIcon,
    CheckCircleIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/16/solid";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useContact } from "@/hooks/use-contact";

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

export default function ContactPage() {
    return (
        <div className="flex min-h-screen w-full flex-col gap-4">
            <Navbar />
            <div className="flex w-full flex-col gap-4 pt-[132px]">
                <Header title="Contact Us" />
                <ContactFormSection />
                <ContactInfoSection contacts={CONTACTS} />
            </div>
            <Footer />
        </div>
    );
}

function ContactFormSection() {
    const { mutate, isPending, isSuccess, isError, error, data } = useContact();

    const form = useForm<ContactFormSchemaType>({
        resolver: zodResolver(ContactFormSchema),
        mode: "onChange",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
        },
    });

    useEffect(() => {
        if (isSuccess) {
            form.reset();
        }
    }, [isSuccess, form]);

    const onSubmit = async (formData: ContactFormSchemaType) => {
        mutate(formData);
    };

    return (
        <SectionContainer className="sm:px-6 md:px-6 xl:px-10">
            <div className="flex w-full items-center justify-between gap-12">
                <div className="hidden flex-1 flex-grow items-center justify-center md:flex">
                    <Image
                        src={"/images/contact.svg"}
                        alt="Contact Us"
                        width={500}
                        height={500}
                        className="h-auto w-full max-w-md flex-1"
                    />
                </div>
                <div className="flex w-full max-w-xl flex-1 flex-col items-center justify-start gap-6 md:items-start">
                    <Badge>Contact Us</Badge>
                    <SectionHeading>We’d Love to Hear From You</SectionHeading>
                    <Form {...form}>
                        <form
                            autoComplete="off"
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="bg-primary-200 flex h-full w-full flex-col items-center justify-start gap-6 rounded-3xl p-8"
                        >
                            <div className="w-full space-y-2">
                                <div className="flex items-center gap-4">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder="John"
                                                        disabled={false}
                                                        {...field}
                                                        leftIcon={<UserIcon className="size-4" />}
                                                        inputClassName="h-10 rounded-lg bg-primary-50"
                                                        className="mt-1"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder="Doe"
                                                        disabled={false}
                                                        {...field}
                                                        leftIcon={<UserIcon className="size-4" />}
                                                        inputClassName="h-10 rounded-lg bg-primary-50"
                                                        className="mt-1"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* Combined error messages for name fields */}
                                {(form.formState.errors.firstName || form.formState.errors.lastName) && (
                                    <div className="text-destructive text-xs">
                                        {form.formState.errors.firstName?.message ? (
                                            <div>{form.formState.errors.firstName.message}</div>
                                        ) : (
                                            form.formState.errors.lastName?.message && (
                                                <div>{form.formState.errors.lastName.message}</div>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="m@example.com"
                                                {...field}
                                                leftIcon={<EnvelopeIcon className="size-4" />}
                                                inputClassName="h-10 rounded-lg bg-primary-50 w-full"
                                                className="mt-1 w-full"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="phoneNumber"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <PhoneInput
                                                placeholder="Phone Number"
                                                disabled={false}
                                                defaultCountry="NP"
                                                className="w-full"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                name="message"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Message"
                                                disabled={false}
                                                {...field}
                                                className="bg-primary-50 max-h-32 min-h-20 w-full resize-y"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Status Message */}
                            {(isSuccess || isError) && (
                                <div
                                    className={`flex items-center gap-2 rounded-lg p-4 ${
                                        isSuccess
                                            ? "border border-green-200 bg-green-50 text-green-800"
                                            : "border border-red-200 bg-red-50 text-red-800"
                                    }`}
                                >
                                    {isSuccess ? (
                                        <CheckCircleIcon className="size-5 flex-shrink-0" />
                                    ) : (
                                        <ExclamationTriangleIcon className="size-5 flex-shrink-0" />
                                    )}
                                    <span className="text-sm font-medium">
                                        {isSuccess && data?.message}
                                        {isError && error.message}
                                    </span>
                                </div>
                            )}

                            <Button type="submit" size="xl" className="self-start px-6" disabled={isPending}>
                                {isPending ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </SectionContainer>
    );
}

function ContactInfoSection({ contacts }: { contacts: typeof CONTACTS }) {
    return (
        <SectionContainer className="sm:px-6 md:px-6 xl:px-10">
            <div className="flex w-full flex-1 flex-col items-center justify-start gap-6">
                <Badge>Contact Information</Badge>
                <SectionHeading>Where to Find Us</SectionHeading>
                <div className="flex w-full flex-col items-stretch justify-center gap-4 lg:flex-row lg:items-stretch">
                    {contacts.map((info) => (
                        <div
                            key={info.name}
                            className="group bg-primary-50 flex w-full flex-1 flex-grow cursor-pointer flex-col items-start justify-start gap-2 rounded-3xl p-2 hover:drop-shadow-lg"
                        >
                            <div className="bg-primary-100 flex w-full flex-1 flex-col items-start justify-start gap-2 rounded-[20px] p-5 text-left">
                                <h5 className="font-albert-sans text-primary-950 text-left text-2xl leading-[1.3em] tracking-[-1px]">
                                    {info.name}
                                </h5>
                                <p className="text-left text-base leading-[1.4em] tracking-[-0.5px] text-neutral-600">
                                    {info.address}
                                </p>
                                <div className="mt-2 flex flex-col gap-1">
                                    {info.phones.map((phone) => (
                                        <span key={phone} className="flex items-center gap-2 text-neutral-700">
                                            <PhoneIcon className="text-primary-800 size-4" />
                                            {phone}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-2 flex flex-col gap-1">
                                    {info.hours?.split(",").map((hour) => (
                                        <span key={hour} className="flex items-center gap-2 text-neutral-700">
                                            <ClockIcon className="text-primary-800 size-4" />
                                            {hour}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
}
