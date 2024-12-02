"use client";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import { motion } from "framer-motion";
import pfp from "@/assets/images/pfp.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";
import Flag from 'react-world-flags';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { type: "spring", duration: 1.5, bounce: 0 },
            opacity: { duration: 0.01 },
        },
    },
};
const handleDownload = () => {
    try {
        const link = document.createElement("a");
        link.href = "/CV2024.pdf";
        link.download = "SimaoCurado.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("Error downloading the file:", error);
    }
};
export const Test = () => {
    const [textHighlight, setTextHighlight] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [hoverTimer, setHoverTimer] = useState(null);

    const handleHoverStart = () => {
        setIsHovered(true);
        const timer = setTimeout(() => {
            setTextHighlight((prev) => !prev);
        }, 1200);
        setHoverTimer(timer);
    };
    const handleHoverEnd = () => {
        setIsHovered(false);

        if (hoverTimer) {
            clearTimeout(hoverTimer);
        }
    };

    return (
        <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
            <div className="container">
            <div className="flex flex-col gap-4 items-center justify-center">
            <motion.div
  className="relative inline-flex items-center"
  onHoverStart={handleHoverStart}
  onHoverEnd={handleHoverEnd}
>
  {/* SVG acting as the border */}
  <motion.svg
    className="absolute   pointer-events-none overflow-visible z-0"  // SVG behind the badge
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 320 70"
  >
    <motion.rect
      x="-3"
      y="5"
      width="325"
      height="67"
      rx="15"
      stroke="#15803d"
      strokeWidth="4"
      variants={draw}
      initial="hidden"
      animate={isHovered ? "visible" : "hidden"}
    />
  </motion.svg>

  {/* Badge Content */}
  <div className="bg-neutral-900 outline outline-1 outline-offset-2 outline-neutral-600 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-1 relative -z-10">
    <div className="size-6 rounded-full items-center inline-flex">
      <Flag code={620} />
    </div>
    <div className="text-sm font-semibold md:font-medium">Based in Portugal</div>
  </div>
</motion.div>
</div>

                <div className="space-y-4 mt-4 mb-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, x: -75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-8xl min-[430px]:text-6xl md:text-7xl font-bold dark:text-stone-200"
                    >
                        Quality <span className="text-blue-500">Software</span> and <span className="text-blue-500">Web Development </span> synergy
                    </motion.h1>

                    <p className="text-sm max-w-md mx-auto min-[430px]:text-base  md:max-w-3xl">
                        <span
                            className={`${textHighlight ? "text-gray-500/50" : "text-dark-200/70 dark:text-stone-200/70"
                                } transition-colors duration-500`}
                        >
                            I&apos;m a{" "}
                        </span>
                        <span
                            className={`${textHighlight
                                ? "highlight-animation bg-gradient-to-r from-teal-600 to-teal-600 to-red-900bg-[length:0%_100%] text-black font-bold bg-no-repeat transition-all duration-1000 ease-in-out"
                                : "text-dark-200/70 dark:text-stone-200/70"
                                } px-1 inline-block`}
                        >
                            Computer Science and engineering student
                        </span>
                        <span
                            className={`${textHighlight ? "text-gray-500/50" : " text-dark-200/70 dark:text-stone-200/70"
                                } transition-colors duration-500`}
                        >
                            seeking to{" "}
                        </span>
                        <span
                            className={`${textHighlight
                                ? "highlight-animation bg-gradient-to-r from-green-900/30 to-red-900/30 bg-[length:0%_100%] bg-no-repeat transition-all duration-1000 ease-in-out"
                                : "  text-dark-200/70 dark:text-stone-200/70"
                                } px-1 inline-block`}
                        >
                            leverage my experience.
                        </span>
                    </p>
                    <p className="text-sm max-w-md mx-auto min-[430px]:text-base  md:max-w-3xl">
                        <span
                            className={`${textHighlight ? "text-gray-500/50" : " text-dark-200/70 dark:text-stone-200/70"
                                } transition-colors duration-500`}
                        >
                            I dedicate much of my time to{" "}
                        </span>
                        <span
                            className={`${textHighlight
                                ? "highlight-animation bg-gradient-to-r from-green-900/30 to-red-900/30 bg-[length:0%_100%] bg-no-repeat transition-all duration-1000 ease-in-out"
                                : "  text-dark-200/70 dark:text-stone-200/70"
                                } px-1 inline-block`}
                        >
                            exploring open-source projects to learn
                        </span>
                        <span
                            className={`${textHighlight ? "text-gray-500/50" : " text-dark-200/70 dark:text-stone-200/70"
                                } transition-colors duration-500`}
                        >
                            how things are built, {" "}
                        </span>
                        <span
                            className={`${textHighlight
                                ? "highlight-animation bg-gradient-to-r from-green-900/30 to-red-900/30 bg-[length:0%_100%] bg-no-repeat transition-all duration-1000 ease-in-out"
                                : "  text-dark-200/70 dark:text-stone-200/70"
                                } px-1 inline-block`}
                        >
                            help answer technical questions
                        </span>
                        <span
                            className={`${textHighlight ? "text-gray-500/50" : " text-dark-200/70 dark:text-stone-200/70"
                                } transition-colors duration-500`}
                        >
                            , and  {" "}
                        </span>
                        <span
                            className={`${textHighlight
                                ? "highlight-animation bg-gradient-to-r from-green-900/30 to-red-900/30 bg-[length:0%_100%] bg-no-repeat transition-all duration-1000 ease-in-out"
                                : "  text-dark-200/70 dark:text-stone-200/70"
                                } px-1 inline-block`}
                        >
                            troubleshoot code
                        </span>
                        <span
                            className={`${textHighlight ? "text-gray-500/50" : " text-dark-200/70 dark:text-stone-200/70"
                                } transition-colors duration-500`}
                        >
                            on various platforms {" "}
                        </span>
                    </p>

                </div>




                <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        draggable="false"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.1 }}
                            draggable="false"
                            dragConstraints={{ left: -100, right: 100 }}
                            initial="hidden"
                            animate="visible"
                            onClick={handleDownload}
                            className="z-10 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
                        >
                            <span className="font-sans">Download my Resume</span>
                            <ArrowDown className="size-4" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        draggable="false"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.1 }}
                            draggable="false"
                            dragConstraints={{ left: -100, right: 100 }}
                            initial="hidden"
                            animate="visible"
                            className="z-10 inline-flex items-center gap-2 border bg-[#1a1a1a]  border-transparent  text-white   hover:border-[#4d4d4d] hover:bg-[#262626]  h-12 px-6 rounded-xl"
                        >
                            <span>👋</span>
                            <a href="https://github.com/SimaoNevesCurado">
                                <span className="font-sans">Explore my Work</span>
                            </a>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
