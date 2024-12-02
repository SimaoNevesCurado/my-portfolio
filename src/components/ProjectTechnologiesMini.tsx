"use client";

const ProjectTechnologiesMini = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 max-w-sm">
      {techStack.map((tech) => (
        <p
          key={tech}
          className="text-[10px] text-dark-200/60 hover:text-dark-200 dark:text-white/60 dark:hover:bg-neutral-600 font-medium bg-neutral-900 dark:bg-dark-300 hover:bg-dark-300/10 dark:hover:bg-dark-400 border dark:border-neutral-600/40 transition-colors duration-200 w-fit rounded-md py-1 px-3"
        >
          {tech}
        </p>
      ))}
    </div>
  );
};

export default ProjectTechnologiesMini;
