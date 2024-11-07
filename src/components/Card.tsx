import grainImage from "@/assets/images/grain.jpg"
import { ComponentPropsWithoutRef, ComponentPropsWithRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge"

export const Card = ({
    className,
    children,
    ...other
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={twMerge(
                "bg-zinc-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none "
                , className
            )}
            {...other}
        >
            <div
                className="absolute inset-0 -z-30 opacity-5 "
                style={{
                    backgroundImage: `url(${grainImage.src})`,
                }}>
            </div>
            {children}
        </div>
    );
};
