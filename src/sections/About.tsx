"use client";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import mapImage from '@/assets/images/mapAbout.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const ICONSECTION = '{/} ';
const toolboxItems = [
    {
        title: 'JavaScript',
        iconType: JavascriptIcon,
    },
    {
        title: 'HTML5',
        iconType: HTMLIcon,
    },
    {
        title: 'CSS3',
        iconType: CssIcon,
    },
    {
        title: 'React',
        iconType: ReactIcon,
    },
    {
        title: 'TypeScript',
        iconType: ReactIcon,
    },
    {
        title: 'Python',
        iconType: ReactIcon,
    },

];
const hobbies = [
    {
        title: 'Fitness',
        emoji: '🏋🏽‍♂️',
        left: '5%',
        top: '5%',
    },
    {
        title: 'Reading',
        emoji: '📖',
        left: '50%',
        top: '0%',
    },
    {
        title: 'Gaming',
        emoji: '🎮',
        left: '10%',
        top: '45%',
    },
    {
        title: 'Music',
        emoji: '🎶',
        left: '75%',
        top: '24%',
    },
    {
        title: 'Photography',
        emoji: '📷',
        left: '35%',
        top: '70%',
    },
    {
        title: 'Hiking',
        emoji: '🧗',
        left: '35%',
        top: '30%',
    },
]

export const AboutSection = () => {
    const constraintRef = useRef(null);
    return (
        <div id="about" className="py-20 lg:py-28 ">
            <div className="container">


                <motion.div
                    className="hidden md:block"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                >
                    <p className="bg- uppercase text-center font-semibold tracking-widest bg-gradient-to-r from-sky-500 to-teal-500 text-transparent bg-clip-text" >About Me</p>
                    <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 ">A Glimpse Into My World</h2>
                    <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto "> Discover more about who I am, what drives me, and the passions that fuel my work. </p>
                </motion.div>
                <motion.div

                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="mt-20 flex flex-col gap-8 ">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
                        <Card className="h-[320px]  md:col-span-2 lg:col-span-1">
                            <div className="flex flex-col px-6 pt-6">
                                <div className="inline-flex items-center gap-2 ">
                                    <span className="text-3xl font-bold text-sky-500">{ICONSECTION}</span>
                                    <h3 className="font-serif text-3xl">My reads</h3>
                                </div>
                                <p className="text-sm  lg:text-base max-w-xs text-white/60 mt-2"> Books that inspire my thinking and personal growth.</p>
                            </div>
                            <div className="w-40 mx-auto mt-8">
                                <Image src={bookImage} alt="Book cover" />
                            </div>
                        </Card>
                        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                            <div className="flex flex-col p-6 md:py-8 md:px-10">
                                <div className="inline-flex items-center gap-2 ">
                                    <span className="text-3xl font-bold text-sky-500">{ICONSECTION}</span>
                                    <h3 className="font-serif text-3xl">My Toolbox</h3>
                                </div>
                                <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">A selection of tools and languages that empower my projects .</p>
                            </div>
                            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
                            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 ">


                        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                            <div className="flex flex-col px-6 py-6">
                                <div className="inline-flex items-center gap-2 ">
                                    <span className="text-3xl font-bold text-sky-500">{ICONSECTION}</span>
                                    <h3 className="font-serif text-3xl">Beyond the code</h3>
                                </div>
                                <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">Explore the books shaping my perspectives.</p>
                            </div>

                            <div className=" relative flex-1" ref={constraintRef} >
                                {hobbies.map(hobby => (
                                    <motion.div key={hobby.title} className="inline-flex  items-center gap-2 px-6  bg-gradient-to-r from-sky-400 to-blue-500 rounded-full py-1.5 absolute"
                                        style={
                                            {
                                                left: hobby.left,
                                                top: hobby.top,
                                            }}
                                        drag
                                        dragConstraints={constraintRef}
                                    >
                                        <span className="font-medium text-gray-950">{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>



                        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 -z-20 animate-ping [animation-duration:2s]"></div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 -z-10"></div>
                                <Image src={smileMemoji} alt="emoji smile" className="size-14" />
                            </div>

                        </Card>
                    </div>
                </motion.div>
            </div >
        </div >
    );


};
