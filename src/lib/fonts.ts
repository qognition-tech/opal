import { Albert_Sans, Geist } from "next/font/google";

import { cn } from "@/lib/utils";

const fontAlbertSans = Albert_Sans({
    subsets: ["latin"],
    variable: "--font-albert-sans",
});

const fontGeist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
});

export const fontVariables = cn(fontAlbertSans.variable, fontGeist.variable);
