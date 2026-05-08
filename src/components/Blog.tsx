import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const POSTS = [
  { date: "Mars 2026", cat: "Animation", title: "L'art du timing en motion design web", excerpt: "Pourquoi 0.6s change tout entre une transition correcte et une expérience inoubliable." },
  { date: "Févr. 2026", cat: "Performance", title: "Three.js & React : faire vivre la 3D sans tuer le LCP", excerpt: "Stratégies pour intégrer du WebGL dans une stack moderne sans sacrifier les performances." },
  { date: "Janv. 2026", cat: "Design System", title: "Construire une palette qui ne vieillit pas", excerpt: "OKLCH, tokens sémantiques et discipline : la recette d'un design system qui dure." },
];

export function Blog() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="06" kicker="Journal" title="Articles récents." />

        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass group cursor-pointer rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-secondary/40"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span>{p.cat}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl leading-tight transition-colors group-hover:text-primary-glow">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary-glow">
                Lire l'article <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
