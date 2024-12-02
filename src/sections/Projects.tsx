"use client";

import { portfolioProjects } from "@/assets/data/constants";
import ProjectCard from "@/components/Card";

const ProjectsSection = () => {
    return (
        <div className="container">
            <div className="py-32" id="work">

                <div className=" text-center mb-6">

                    <h2 className="text-3xl  min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200 mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-sm max-w-md mx-auto min-[430px]:text-base  md:max-w-3xl text-dark-200/70 dark:text-stone-200/70">
                        Here, you&apos;ll find a selection of work that highlights my skills, creativity, and dedication to solving challenges
                    </p>
                </div>
                <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
    <a
        href=""
        className="bg-neutral-900 text-white text-sm md:text-base px-4 py-2 rounded-xl border border-neutral-400/30 shadow-lg hover:scale-110 hover:bg-neutral-800 hover:border-white hover:shadow-neutral-600/50 transition-all duration-300"
    >
        All Projects
    </a>
</div>


                <div className="grid lg:grid-cols-3 gap-4 mt-8">
                    {portfolioProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
