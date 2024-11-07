import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
    subsets: ['latin'],
    variable: "--font-sans",
});
const calistoga = Calistoga({
    subsets: ['latin'],
    variable: "--font-serif",
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Simão Curado Portfolio",
    description: "...",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={twMerge(inter.variable, calistoga.variable, "text-white bg-zinc-900 antialiased font-sans")}>

                <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-900 bg-[linear-gradient(to_right,#4b4b4b_1px,transparent_1px),linear-gradient(to_bottom,#4b4b4b_1px,transparent_1px)] bg-[size:9rem_7rem] [mask-image:radial-gradient(ellipse_100%_90%_at_50%_0%,#000_0%,transparent_100%)]" />

                {children}
            </body>
        </html>
    );
}
