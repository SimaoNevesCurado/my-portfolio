import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
    subsets: ['latin'],
    variable: "--font-sans",
});
const roboto = Roboto({
    subsets: ['latin'],
    variable: "--font-serif",
    weight: ["300"],
});

export const metadata: Metadata = {
    title: "Simão Curado",
    description: "Check out my work",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={twMerge(roboto.variable, inter.variable, "text-white bg-neutral-950 antialiased font-sans")}>


            <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-950 bg-[linear-gradient(to_right,#4b4b4b_1px,transparent_1px),linear-gradient(to_bottom,#4b4b4b_1px,transparent_1px)] bg-[size:9rem_7rem] [mask-image:radial-gradient(ellipse_100%_90%_at_50%_0%,#000_0%,transparent_100%)]" />


                {children}
            </body>
        </html>
    );
}
