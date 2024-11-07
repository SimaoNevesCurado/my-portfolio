import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import workingonit from "@/assets/images/working-on-it.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from '@/assets/images/grain.jpg';
import { Card } from "@/components/Card";

const portfolioProjects = [
    {
        company: "SOMBRÀMISTURA",
        year: "2023",
        title: "Company Website",
        results: [
            { title: "A fully functional and visually engaging website " },
            { title: "Done with React, Javascript" },
            { title: "Styled with TailwindCSS and Framer Motion" },
        ],
        link: "https://youtu.be/4k7IdSLxh6w",
        image: darkSaasLandingPage,
    },
    {
        company: "Still developing",
        year: "2024",
        title: "Workout Mobile App",
        results: [
            { title: "Functional workout App with React Native" },
            { title: "Log the exercises" },
            { title: "Track your progress" },
        ],
        link: "https://youtu.be/7hi5zwO75yc",
        image: workingonit,
    },
    {
        company: "Individual Client",
        year: "2024",
        title: "Photographer Portfolio",
        results: [
            { title: "Visually captivating portfolio" },
            { title: "Clean and simple" },
            { title: "Straight to the point" },
        ],
        link: "https://youtu.be/Z7I5uSRHMHg",
        image: workingonit,
    },
];

export const ProjectsSection = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <p className="uppercase text-center font-semibold tracking-widest bg-gradient-to-r from-emerald-500 to-teal-700 text-transparent bg-clip-text">
                    Portfolio Highlights
                </p>
                <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
                    Featured Projects
                </h2>
                <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
                    Here, you'll find a selection of work that highlights my skills, creativity, and dedication to solving challenges
                </p>
                <div className="md:mt-20 flex flex-col mt-10 gap-20">
                    {portfolioProjects.map((project, projectIndex) => (
                        <Card
                            key={`${project.title}-${project.year}`} // Unique key using title and year
                            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                            style={{
                                top: `calc(64px + ${projectIndex * 40}px)`,
                            }}
                        >
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="pb-16">
                                    <div className="bg-gradient-to-r from-emerald-500 to-teal-700 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>

                                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {project.results.map((result, index) => (
                                            <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                                                <CheckCircleIcon className="size-5 md:size-6" />
                                                <span>{result.title.replace("'", "&#39;")}</span> {/* Escaping single quotes */}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Link is now properly structured around the button */}
                                    <a href={project.link}>
                                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                                            <span>See More</span>
                                            <ArrowUpRight className="size-4" />
                                        </button>
                                    </a>
                                </div>

                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-center">
                    <a href="https://github.com/SimaoNevesCurado" className="inline-block">
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                            <span>Explore More Projects</span>
                            <ArrowUpRight className="size-4" />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};
