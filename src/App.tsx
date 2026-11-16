import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import { useHashRoute } from "./useHashRoute";

export default function App() {
  const { projectSlug, hash } = useHashRoute();

  // When coming back to the home view via a section anchor (e.g. from a
  // project detail page's "Back to portfolio" link, or a nav link clicked
  // while on a detail page), the target section mounts a tick after the
  // hash changes — so the browser's native anchor-scroll fires too early.
  // Scroll to it ourselves once the home sections are in the DOM.
  useEffect(() => {
    if (projectSlug) return;
    const id = hash.replace(/^#/, "");
    if (!id || id === "top") return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ block: "start" });
  }, [projectSlug, hash]);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav />
      <main>
        {projectSlug ? (
          <ProjectDetail slug={projectSlug} />
        ) : (
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
