import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import Skills from "@/sections/Skills";
import ProjectsSection from "@/sections/Projects";



export default function Home() {
    return (
        <div>
            <Header />
           <HeroSection/>
            <Skills />
            <ProjectsSection />
            <Footer />

        </div>
    );
}
