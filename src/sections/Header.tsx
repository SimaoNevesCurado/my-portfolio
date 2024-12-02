"use client"

export const Header = () => {
    // Function to scroll to "About" section
    const scrollToAbout = () => {
      const aboutSection = document.getElementById('about'); // Ensure your "About" section has this ID
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Function to scroll to "Projects" section
    const scrollToProjects = () => {
      const projectsSection = document.getElementById('projects'); // Ensure your "Projects" section has this ID
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div className="flex justify-center items-center fixed w-full top-3 z-20">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-item">
            Home
          </button>
          <button onClick={scrollToProjects} className="nav-item">
            Projects
          </button>
          <button onClick={scrollToAbout} className="nav-item">
            About
          </button>
          <a href="mailto:simao_neves_curado@hotmail.com" className="nav-item bg-white text-zinc-900 hover:bg-white/80">
            Contact
          </a>
        </nav>
      </div>
    );
  };
