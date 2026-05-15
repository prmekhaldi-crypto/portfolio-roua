import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import rouaImg from "../roua.jpg";

const TRAITS = ["C / Pascal / Assembleur 90", "HTML & CSS", "Tailwind CSS", "Arabe", "Français", "Anglais"];

export function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="apropos" className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="01" kicker="À propos" title="Une étudiante. Une vision concrète." />

        <div className="grid gap-16 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="glass relative aspect-[4/5] overflow-hidden rounded-2xl">
              {!imageError ? (
                <img
                  src={rouaImg}
                  alt="Roua Mekhaldi"
                  className="h-full w-full object-cover object-top"
                  style={{ objectPosition: "center 40%" }} 
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-950 text-center text-8xl font-display text-primary-foreground/80">
                  R
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span></span>
                <span></span>
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
              Je suis Roua — étudiante en informatique et développeuse front-end. Je conçois des
              interfaces où <span className="italic text-royal">la logique</span> rencontre
              <span className="italic text-royal"> l'expérience utilisateur</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Je travaille avec des technologies comme C, Pascal, Assembleur 90, HTML, CSS, un peu de
              JavaScript et Tailwind CSS. J'ai réalisé des projets en collaboration : une Pomodoro
              App avec Issam Elghettas, une application touristique avec Sirine Ayadi, et un outil
              de traitement de fichiers pour union, intersection et différence avec Ayadi Sirine.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Je parle arabe, français, anglais, espagnol et un peu d'allemand. J'investis aussi mon
              énergie dans la vie associative : responsable story pour l'AUP 4, membre active du
              Club ETIC et membre active du Club CSE sur les sujets UI/UX.
            </motion.p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-3xl p-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">Responsabilités</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Responsable story pour l'événement AUP 4 et coordination du contenu visuel.</p>
              </div>
              <div className="glass rounded-3xl p-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">Clubs</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Membre active du Club ETIC et du Club CSE (UI/UX).</p>
              </div>
            </div>

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
