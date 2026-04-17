import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { AskPrompt } from "@/components/AskPrompt";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SideRail } from "@/components/SideRail";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <CommandPalette />
      <SideRail />
      <main>
        <Hero />
        <SectionDivider chapter="01" label="Intro" />
        <About />
        <SectionDivider chapter="02" label="Work" />
        <Experience />
        <SectionDivider chapter="03" label="Projects" />
        <Projects />
        <SectionDivider chapter="04" label="Skills" />
        <Skills />
        <SectionDivider chapter="05" label="Ask" />
        <AskPrompt />
        <SectionDivider chapter="06" label="Contact" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
