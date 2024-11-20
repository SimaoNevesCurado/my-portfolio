import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import ScrollIntoView from 'react-scroll-into-view';

export default function Home() {
    return (
        <div>
            <Header />
            <HeroSection />
            <ProjectsSection />
            <TapeSection />
            <AboutSection />
            <ContactSection />
            <Footer/>

        </div>
    );
}
