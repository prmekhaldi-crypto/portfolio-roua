import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const GROUPS = [
  {
    title: "Langages",
    items: [
      { name: "Pascal", lvl: 100 },
      { name: "C / C++", lvl: 90 },
      { name: "Assembleur", lvl: 90 },
      { name: "HTML & CSS", lvl: 85 },
      { name: "JavaScript", lvl: 60 },
      { name: "Tailwind CSS", lvl: 40 },
      { name: "React", lvl: 25 },
    ],
  },
  {
    title: "Langues",
    items: [
      { name: "Arabe", lvl: 100 },
      { name: "Français", lvl: 95 },
      { name: "Anglais", lvl: 90 },
      { name: "Espagnol", lvl: 85 },
      { name: "Allemand", lvl: 30 },
    ],
  },
  {
    title: "Outils",
    items: [
      { name: "Figma & XD", lvl: 98 },
      { name: "AI", lvl: 80 },
      { name: "GitHub & Git", lvl: 99 },
      { name: "Photoshop", lvl: 90 },
      { name: "VS Code", lvl: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section id="competences" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="04" kicker="Stack" title="Compétences." />

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
