import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const TIMELINE = [
  { year: "2026", title: "Responsable story · AUP 4", place: "Événement étudiant", desc: "Coordination du récit visuel et de la communication digitale de l'événement AUP 4." },
  { year: "2026", title: "Membre active · Club ETIC", place: "Association étudiante", desc: "Participation aux projets, ateliers et actions de communication du club." },
  { year: "2026", title: "Membre active · Club CSE (UI/UX)", place: "Club design", desc: "Co-conception d'expériences utilisateur et maquettes pour des événements étudiants." },
  { year: "2025/2026", title: "Projets collaboratifs", place: "Université", desc: "Réalisations de la Pomodoro App, de l'application touristique et d'un outil de traitement de fichiers." },
];

export function Timeline() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="05" kicker="Parcours" title="Expérience." />

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
