import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const TIMELINE = [
  { year: "2026", title: "Stage Frontend Developer", place: "Studio créatif · Paris", desc: "Développement d'interfaces animées pour des marques internationales." },
  { year: "2025", title: "Freelance · UI Engineer", place: "Indépendante", desc: "Refontes web, design systems et intégrations performantes pour startups." },
  { year: "2024", title: "Licence en Informatique", place: "Université", desc: "Spécialisation en génie logiciel et interaction homme-machine." },
  { year: "2023", title: "Premiers projets open-source", place: "GitHub", desc: "Contributions à des bibliothèques d'animation et de composants React." },
];

export function Timeline() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="04" kicker="Parcours" title="Expérience." />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
            >
              <div className={`absolute top-2 h-3 w-3 rounded-full bg-primary shadow-glow ${i % 2 === 0 ? "left-3 md:left-auto md:-right-1.5" : "left-3 md:-left-1.5"}`} />
              <div className="glass rounded-xl p-6">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">{t.year}</div>
                <h3 className="mt-2 font-display text-2xl">{t.title}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{t.place}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
