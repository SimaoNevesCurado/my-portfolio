"use client";

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";

export const ContactSection = () => {
    return (
        <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='container'>
                <div className='bg-gradient-to-r from-sky-400 to-blue-500 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden'>
                    {/* Background Image */}
                    <div
                        className='absolute inset-0 opacity-5 pointer-events-none -z-10'
                        style={{
                            backgroundImage: `url(${grainImage.src})`
                        }}
                    ></div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative">
                        <div>
                            <h2 className='font-serif text-2xl md:text-3xl'>
                                Let&apos;s create something amazing together
                            </h2>
                            <p className='text-sm md:text-base mt-2'>
                                Ready to bring your next project to life? Let&apos;s connect and discuss
                            </p>
                        </div>
                        <div>
                            <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 relative z-20'>
                                <a
                                    href="mailto:simao_neves_curado@hotmail.com"
                                    className='font-semibold'
                                >
                                    Contact me
                                </a>
                                <ArrowUpRightIcon className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
