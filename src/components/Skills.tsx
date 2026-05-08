import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const GROUPS = [
  {
    title: "Frontend",
    items: [
      { name: "React", lvl: 95 },
      { name: "Next.js", lvl: 88 },
      { name: "TypeScript", lvl: 90 },
      { name: "Tailwind CSS", lvl: 95 },
      { name: "GSAP", lvl: 85 },
    ],
  },
  {
    title: "Langages",
    items: [
      { name: "JavaScript", lvl: 95 },
      { name: "Python", lvl: 80 },
      { name: "Java", lvl: 75 },
      { name: "C / C++", lvl: 70 },
      { name: "SQL", lvl: 78 },
    ],
  },
  {
    title: "Outils",
    items: [
      { name: "Git", lvl: 90 },
      { name: "Figma", lvl: 88 },
      { name: "Docker", lvl: 70 },
      { name: "Vite", lvl: 92 },
      { name: "Three.js", lvl: 65 },
    ],
  },
];

export function Skills() {
  return (
    <section id="competences" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="03" kicker="Stack" title="Compétences." />

        <div className="grid gap-6 md:grid-cols-3">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, delay: gi * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="glass shimmer rounded-2xl p-8"
            >
              <h3 className="mb-8 font-display text-2xl">{g.title}</h3>
              <div className="space-y-5">
                {g.items.map((it, i) => (
                  <div key={it.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-foreground">{it.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{it.lvl}%</span>
                    </div>
                    <div className="h-px w-full overflow-hidden bg-border">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${it.lvl}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: gi * 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-primary to-primary-glow"
                        style={{ boxShadow: "0 0 12px var(--primary)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
