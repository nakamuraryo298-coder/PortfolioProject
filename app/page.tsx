import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Strengths from "@/components/sections/Strengths";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Commitments from "@/components/sections/Commitments";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Strengths />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Commitments />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
