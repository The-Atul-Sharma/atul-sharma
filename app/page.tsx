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

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <CommandPalette />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <AskPrompt />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
