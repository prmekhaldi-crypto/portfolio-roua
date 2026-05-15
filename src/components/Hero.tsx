import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Particles } from "./Particles";
import { Hero3D } from "./Hero3D";
import { Magnetic } from "./Magnetic";

const ROLES = ["Développeuse Frontend", "Étudiante en Informatique", "Créatrice d'Expériences Web"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  const title = "Roua";
  const titleLast = "Mekhaldi";

  return (
    <section id="accueil" className="noise relative flex min-h-screen items-center overflow-hidden">
      {/* Layers */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      <div className="absolute inset-0 opacity-60"><Particles /></div>
      <div className="absolute right-0 top-0 h-full w-full opacity-90 md:w-[55%]"><Hero3D /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-primary" /> Portfolio · 2026
        </motion.p>

        <h1 className="font-display text-[clamp(3rem,11vw,11rem)] font-light leading-[0.9] tracking-tight">
          <span className="block overflow-hidden">
            {title.split("").map((c, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 2.5 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {c}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden italic text-royal">
            {titleLast.split("").map((c, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 2.8 + i * 0.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {c}
              </motion.span>
            ))}
          </span>
        </h1>

        <div className="mt-8 h-10 overflow-hidden md:h-12">
          <motion.div
            animate={{ y: -idx * 48 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col"
          >
            {ROLES.map((r) => (
              <span key={r} className="flex h-12 items-center text-xl text-muted-foreground md:text-2xl">
                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary-glow" />
                {r}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#projets"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-glow transition-shadow hover:shadow-[0_0_80px_-10px_var(--primary-glow)]"
            >
              <span>Voir mes projets</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
            >
              Me contacter
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block h-8 w-px bg-primary"
          />
          Faites défiler
        </motion.div>
      </div>
    </section>
  );
}
