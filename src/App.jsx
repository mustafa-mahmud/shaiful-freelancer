import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Snippet from "./components/Snippet";
import Tools from "./components/Tools";
import Strengths from "./components/Strengths";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

const SECTIONS = [
  "hero",
  "stats",
  "about",
  "services",
  "snippet",
  "tools",
  "strengths",
  "experience",
  "education",
  "contact",
];

export default function App() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const id = visible[0].target.getAttribute("id");
        if (id && SECTIONS.includes(id)) setActiveId(id);
      },
      { rootMargin: "-10% 0% -70% 0%", threshold: 0.05 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeId={activeId} setActiveId={setActiveId} />
      <main className="relative z-0">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Snippet />
        <Tools />
        <Strengths />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
