import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

interface ActionButtonProps {
    className?: string;
    text: string;
    href: string;
    iconContainerWrapperClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
    target?: string;
    rel?: string;
}

export function ActionButtonNav({
    className,
    text,
    href,
    iconContainerWrapperClassName,
    iconContainerClassName,
    iconClassName,
    target,
    rel,
}: ActionButtonProps) {
    return (
        <Button
            size="xl"
            className={cn(
                "group from-yellow-400 via-yellow-400 to-yellow-400  rounded-full bg-gradient-to-t pr-2 text-neutral-50  transition-all duration-400 ease-out ",
                className,
            )}
            asChild
        >
            <Link href={href} target={target} rel={rel}>
                <span>{text}</span>
                <div
                    className={cn(
                        "bg-primary-50 relative flex size-7 items-center justify-center overflow-hidden rounded-full",
                        iconContainerWrapperClassName,
                    )}
                >
                    <div
                        className={cn(
                            "absolute top-1/2 right-1.5 flex -translate-y-1/2 items-center justify-center gap-2 transition-transform duration-400 ease-out group-hover:translate-x-[calc(50%+4px)]",
                            iconContainerClassName,
                        )}
                    >
                        <ArrowRightIcon className={cn("text-primary-700 size-4 max-md:size-3", iconClassName)} />
                        <ArrowRightIcon className={cn("text-primary-700 size-4 max-md:size-3", iconClassName)} />
                    </div>
                </div>
            </Link>
        </Button>
    );
}
