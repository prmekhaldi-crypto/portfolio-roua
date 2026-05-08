import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

const PROJECTS = [
  {
    name: "Aurora Studio",
    tag: "Plateforme créative",
    desc: "Tableau de bord SaaS pour studios créatifs. Interfaces fluides, micro-interactions soignées, mode sombre par défaut.",
    stack: ["React", "TypeScript", "GSAP", "Tailwind"],
    hue: "from-blue-700 to-indigo-900",
  },
  {
    name: "Lumen E-commerce",
    tag: "Boutique haut de gamme",
    desc: "Site marchand pour une marque de luxe. Animations cinématographiques et performances Lighthouse 98+.",
    stack: ["Next.js", "Three.js", "Framer Motion"],
    hue: "from-indigo-800 to-blue-950",
  },
  {
    name: "Cortex Dashboard",
    tag: "Visualisation de données",
    desc: "Outil de visualisation pour une fintech. Graphes temps réel, accessibilité AAA, design system maison.",
    stack: ["React", "D3.js", "TypeScript"],
    hue: "from-blue-900 to-violet-950",
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

  return (
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
      <div className={`absolute inset-0 bg-gradient-to-br ${p.hue}`} />
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

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/80 to-transparent p-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        <a className="inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary-glow">
          Voir le projet <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projets" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="02" kicker="Sélection" title="Projets choisis." />
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
