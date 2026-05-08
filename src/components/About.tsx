import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const TRAITS = ["Curieuse", "Rigoureuse", "Créative", "Empathique", "Passionnée", "Détail-orientée"];

export function About() {
  return (
    <section id="apropos" className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="01" kicker="À propos" title="Une étudiante. Une vision." />

        <div className="grid gap-16 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="glass relative aspect-[4/5] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[8rem] text-primary-foreground/20">R</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span>Alger · Paris</span>
                <span>2026</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8 md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-light leading-relaxed md:text-3xl"
            >
              Je suis Roua — étudiante en informatique et développeuse frontend. Je conçois des
              interfaces où <span className="italic text-royal">la précision</span> rencontre
              <span className="italic text-royal"> l'émotion</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Passionnée par le design d'interaction, le motion design et les architectures front
              modernes, je transforme des idées complexes en expériences claires, rapides et
              mémorables. Mon terrain de jeu : React, TypeScript, GSAP — et tout ce qui permet
              de raconter une histoire à l'écran.
            </motion.p>

            <div className="flex flex-wrap gap-2 pt-4">
              {TRAITS.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="glass rounded-full px-4 py-2 text-sm uppercase tracking-[0.15em] text-foreground"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
