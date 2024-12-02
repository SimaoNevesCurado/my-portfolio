"use client";

import { CodeXml } from "lucide-react";
import Image from "next/image";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";

import { motion } from "framer-motion";

interface ProjectProps {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    liveDemoUrl: string;
    sourceCodeUrl: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
    const { id, heading, imageUrl, techStack } = project;

    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-neutral-900 dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8"
        >
            <a href={`/work/${id}`} className="rounded-lg overflow-hidden block">
                <Image
                    src={imageUrl}
                    width={1000}
                    height={1000}
                    alt={heading}
                    className="hover:scale-110 transition-transform duration-700"
                />
            </a>
            <div>
                <h3 className="text-2xl sm:text-3xl font-semibold">{heading}</h3>
                <div className="mt-4 flex flex-col sm:flex-row justify-between gap-5">
                    <ProjectTechnologiesMini techStack={techStack} />
                    <a
                        href={`/work/${id}`}
                        className="p-3 bg-neutral-900 text-white text-xs sm:text-sm rounded-lg border border-neutral-500/40 shadow-md hover:scale-105 hover:bg-neutral-800 hover:border-white hover:shadow-neutral-600/50 transition-all duration-300 self-start sm:self-end flex items-center gap-2"
                    >
                        <CodeXml className="text-xs sm:text-sm text-[#F3F4F3] dark:text-dark-200" />
                    </a>

                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
