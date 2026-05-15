import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const DESIGN_ITEMS = [
  {
    title: "UI & prototype",
    desc: "Maquettes et expériences visuelles conçues pour rendre l'interface claire, intuitive et accessible.",
    tags: ["Responsive", "UI/UX", "Interaction"],
  },
  {
    title: "Expériences interactives",
    desc: "Travail sur le storytelling visuel et les parcours utilisateur pour des applications étudiantes et touristiques.",
    tags: ["Animation", "Story", "Ergonomie"],
  },
  {
    title: "Contenu visuel",
    desc: "Supports de communication pour événements et clubs : visuels, stories et contenus digitaux engageants.",
    tags: ["AUP 4", "Club ETIC", "Club CSE"],
  },
];

export function Designs() {
  return (
    <section id="designs" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="03" kicker="Designs" title="Mes explorations visuelles." />

        <div className="mt-10 space-y-6">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            J'ai fait plusieurs designs pour des posts Instagram, des imprimables et même des frame story. Ci-dessous, tu retrouves des exemples de supports visuels pensés pour des événements, des clubs et des réseaux sociaux.
          </p>
          <a
            href="https://www.figma.com/design/YaBEhbpnvuhHDgz1RVsUH3/portfolio?node-id=0-1&t=9Urk334bGavFDPX3-1"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voir les designs Figma
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {DESIGN_ITEMS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass group rounded-3xl p-8 transition hover:-translate-y-2"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">{item.title}</span>
              <p className="mt-6 text-lg font-semibold text-foreground">{item.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
