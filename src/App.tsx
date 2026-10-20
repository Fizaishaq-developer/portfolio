import { Navbar } from "./components/Navbar";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-teal-glow focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>

      <AnimatedBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
