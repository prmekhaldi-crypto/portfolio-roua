import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "./Magnetic";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#designs", label: "Designs" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Magnetic>
            <a
              href="https://portfolio-roua-roua.vercel.app/cv_roua.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              CV
            </a>
          </Magnetic>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Magnetic key={l.href} strength={0.25}>
                <a href={l.href} className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </Magnetic>
            ))}
          </nav>

          <Magnetic>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Ouvrir le menu"
            >
              <span className="h-px w-6 bg-foreground" />
              <span className="h-px w-6 bg-foreground" />
            </button>
          </Magnetic>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-primary text-primary-foreground md:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-full flex-col p-8">
              <div className="flex justify-end">
                <button onClick={() => setOpen(false)} className="text-lg" aria-label="Fermer">✕</button>
              </div>
              <nav className="mt-12 flex flex-col gap-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl tracking-tight"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
