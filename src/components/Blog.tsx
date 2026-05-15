import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const POSTS = [
  {
    date: "Mars 2026",
    cat: "Carrière",
    title: "Du diplôme à l’emploi : le stage comme vrai passage",
    excerpt: "Le diplôme ouvre la porte, mais c'est l'expérience pratique et le stage qui transforment un profil étudiant en candidat recherché.",
    link: "https://www.linkedin.com/posts/etic-club_le-dipl%C3%B4me-ouvre-des-portes-mais-lexp%C3%A9rience-activity-7456424616308174848-gCM7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6rcukB4X1TrIXsbPm5QqFyd-kY5v_JTgk",
  },
  {
    date: "Avril 2026",
    cat: "CV",
    title: "Un CV presque parfait",
    excerpt: "Structure claire, contenu ciblé et mise en forme professionnelle : comment faire un CV qui attire l'œil du recruteur en quelques secondes.",
    link: "https://www.linkedin.com/posts/etic-club_d%C3%A9couvrez-comment-transformer-votre-cv-en-activity-7457843324784148480-l25S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6rcukB4X1TrIXsbPm5QqFyd-kY5v_JTgk",
  },
  {
    date: "Avril. 2026",
    cat: "LinkedIn",
    title: "Les erreurs LinkedIn qui te font rater des opportunités",
    excerpt: "Photo, titre, section À propos et mots-clés : voici ce qui empêche ton profil LinkedIn d'être vu par les bons recruteurs.",
    link: "https://www.linkedin.com/posts/etic-club_vous-avez-un-profil-linkedin-mais-les-recruteurs-activity-7458501901022580736-YAs8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6rcukB4X1TrIXsbPm5QqFyd-kY5v_JTgk",
  },
  {
    date: "Mai. 2026",
    cat: "Networking",
    title: "Networking : ce que personne ne t’a jamais vraiment expliqué",
    excerpt: "Le vrai réseau ne se construit pas en masse, mais avec sincérité, suivi et valeur partagée au bon moment.",
  },
];

export function Blog() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="07" kicker="Journal" title="Articles récents." />

        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((p, i) => {
            const ArticleContent = (
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
            );

            return p.link ? (
              <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer">
                {ArticleContent}
              </a>
            ) : (
              ArticleContent
            );
          })}
        </div>
      </div>
    </section>
  );
}
