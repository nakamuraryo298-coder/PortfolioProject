import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Strengths from "@/components/sections/Strengths";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
// import CaseStudies from "@/components/sections/CaseStudies"; // hidden for now
import Services from "@/components/sections/Services";
import Commitments from "@/components/sections/Commitments";
import Process from "@/components/sections/Process";
// import Testimonials from "@/components/sections/Testimonials"; // hidden until real client quotes are available
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Strengths />
        <Skills />
        <Experience />
        <Projects />
        {/* <CaseStudies /> hidden for now */}
        <Services />
        <Commitments />
        <Process />
        {/* <Testimonials /> hidden until real client quotes are available */}
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
