const ProjectTechnologiesMini = ({ techStack }: { techStack: string[] }) => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {techStack.map((tech, index) => (
                <p
                    key={`${tech}-${index}`} // Ensures unique keys
                    className="text-xs text-dark-200/60 hover:text-dark-200 dark:text-white/60 dark:hover:text-white bg-neutral-900 dark:bg-dark-300 hover:bg-neutral-800 dark:hover:bg-dark-400 border border-neutral-700 dark:border-neutral-600 transition-colors duration-200 w-fit rounded-md py-1 px-3"
                >
                    {tech}
                </p>
            ))}
        </div>
    );
};

export default ProjectTechnologiesMini;
