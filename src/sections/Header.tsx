export const Header = () => {
    return (
        <div className="flex justify-center items-center fixed w-full top-3 z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15  rounded-full    backdrop-blur ">
                <a href="#" className="nav-item">Home</a>
                <a href="#" className="nav-item">Projects</a>
                <a href="#" className="nav-item">About</a>
                <a href="#" className="nav-item bg-white text-zinc-900 hover:bg-white/80 ">Contact</a>
            </nav>
        </div>
    );
};

