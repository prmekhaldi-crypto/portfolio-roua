import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { Cursor } from "@/components/Cursor";
import { Loader } from "@/components/Loader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Designs } from "@/components/Designs";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MEKHALDI Roua — Développeuse Frontend & Étudiante en Informatique" },
      { name: "description", content: "Portfolio de MEKHALDI Roua. Développeuse frontend passionnée par les interfaces animées, le design d'interaction et les expériences web premium." },
      { property: "og:title", content: "MEKHALDI Roua — Portfolio" },
      { property: "og:description", content: "Développeuse Frontend · Créatrice d'expériences web cinématiques." },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Designs />
        <Skills />
        <Timeline />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
