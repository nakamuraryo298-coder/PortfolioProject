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
import CaseStudies from "@/components/sections/CaseStudies";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Commitments from "@/components/sections/Commitments";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
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
        <CaseStudies />
        <Services />
        <Pricing />
        <Commitments />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
