import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

const PROJECTS = [
  {
    name: "Pomodoro App",
    tag: "Productivité",
    desc: "Application de gestion du temps créée avec Issam Elghettas : cycles focus/repos, réglages personnalisés et interface claire.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    hue: "from-cyan-700 to-sky-900",
    live: "https://lmissam1702.github.io/pomodoro/",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "App Touristique",
    tag: "Guide de voyage",
    desc: "Application touristique conçue avec Sirine Ayadi pour aider les visiteurs à explorer les sites locaux et l'expérience culturelle.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    hue: "from-emerald-700 to-cyan-950",
    figma: "https://www.figma.com/make/0IqLQleV0d51bzU8UWD6xT/Implement-Prompt-Feature?t=X5g56z2VTooruqsM-1",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Outil de fichiers",
    tag: "Algorithmes",
    desc: "Programme d'analyse des fichiers créé avec Ayadi Sirine pour calculer union, intersection et différence de données.",
    stack: ["C", "Pascal", "Algorithmes", "Console"],
    hue: "from-violet-700 to-fuchsia-950",
    repo: "https://github.com/prmekhaldi-crypto/TP-ALSDD.git",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
  },
];

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const href = p.live ?? p.figma ?? p.repo;

  const card = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
    >
      {p.image && (
        <img
          src={p.image}
          alt={p.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className={`absolute inset-0 ${p.image ? "bg-black/30" : "bg-gradient-to-br"} bg-gradient-to-br ${p.hue}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative flex h-full flex-col justify-between p-7">
        <div className="flex items-start justify-between">
          <span className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
            {p.tag}
          </span>
          <span className="font-mono text-xs text-white/50">0{i + 1}</span>
        </div>

        <div>
          <h3 className="font-display text-3xl tracking-tight md:text-4xl">{p.name}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="text-[11px] uppercase tracking-[0.2em] text-white/60">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/80 to-transparent p-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="flex flex-wrap gap-3">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Live <span>→</span>
            </a>
          )}
          {p.figma && (
            <a
              href={p.figma}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/20"
            >
              Figma <span>→</span>
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/20"
            >
              Repo <span>→</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className="block">
      {card}
    </a>
  ) : (
    card
  );
}

export function Projects() {
  return (
    <section id="projets" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="02" kicker="Sélection" title="Projets choisis." />

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Ces projets sont des réalisations concrètes : aucun visuel n'est généré automatiquement. Tu peux consulter le code, les démonstrations live et les prototypes Figma à travers les liens ci-dessous.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
