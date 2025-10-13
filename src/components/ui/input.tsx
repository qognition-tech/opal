import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftIconClassName?: string;
    rightIconClassName?: string;
    className?: string;
    inputClassName?: string;
}

function Input({
    className,
    type,
    leftIcon,
    rightIcon,
    leftIconClassName,
    rightIconClassName,
    inputClassName,
    ...props
}: InputProps) {
    // If no icons are provided, render the simple input
    if (!leftIcon && !rightIcon) {
        return (
            <input
                type={type}
                data-slot="input"
                className={cn(
                    "selection:bg-primary-300 selection:text-primary-950 flex h-9 w-full min-w-0 rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-neutral-400/50",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    inputClassName,
                )}
                {...props}
            />
        );
    }

    // Calculate padding based on which icons are present
    const paddingLeft = leftIcon ? "pl-10 pr-3" : "px-3";
    const paddingRight = rightIcon ? "pr-10 pl-3" : "px-3";
    const padding = leftIcon && rightIcon ? "px-10" : leftIcon ? paddingLeft : paddingRight;

    return (
        <div className={cn("relative w-full", className)}>
            <input
                autoComplete="off"
                type={type}
                data-slot="input"
                className={cn(
                    "selection:bg-primary-300 selection:text-primary-950 flex h-9 w-full min-w-0 rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-neutral-400/50",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    padding,
                    inputClassName,
                )}
                {...props}
            />
            {leftIcon && (
                <div
                    className={cn(
                        "pointer-events-none absolute top-1/2 left-3 flex -translate-y-1/2 items-center justify-center text-neutral-500",
                        leftIconClassName,
                    )}
                >
                    {leftIcon}
                </div>
            )}
            {rightIcon && (
                <div
                    className={cn(
                        "pointer-events-none absolute top-1/2 right-3 flex -translate-y-1/2 items-center justify-center text-neutral-500",
                        rightIconClassName,
                    )}
                >
                    {rightIcon}
                </div>
            )}
        </div>
    );
}

export { Input };
