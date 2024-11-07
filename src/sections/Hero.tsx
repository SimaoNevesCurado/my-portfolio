"use client";

import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';


const handleDownload = () => {
    try {
        const link = document.createElement('a');
        link.href = '/CV2024.pdf';
        link.download = 'SimaoCurado.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading the file:', error);
    }
};

export const HeroSection = () => {
    return (
        <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>

            <div className="container">
                <div className='flex flex-col items-center'>
                    <Image src={memojiImage} className="size-[100px]" alt="Memoji at computer" />
                    <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                        <div className='bg-green-500 size-2.5 rounded-full'></div>
                        <div className='text-sm font-semibold md:font-medium '>Available for new projects</div>
                    </div>
                </div>
                <div className='max-w-lg mx-auto'>
                    <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>Crafting Digital Experiences</h1>
                    <p className='mt-4 text-center text-white/60 md:text-lg'> Through innovative design, code, and storytelling, I bring ideas to life. I’m a dedicated creator with a passion for crafting unique digital experiences.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4 '>
                    <button
                        onClick={handleDownload}
                        className="z-10 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                        <span className="font-semibold">Download CV</span>
                        <ArrowDown className="size-4" />
                    </button>
                    <button className=' z-10 inline-flex items-center gap-2 border bg-white text-gray-900 h-12 px-6 rounded-xl'>
                        <span>👋</span>
                        <span className='font-semibold'>Explore my Work</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
