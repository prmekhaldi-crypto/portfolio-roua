import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Magnetic } from "./Magnetic";

const SOCIALS = [
  { label: "Email", href: "mailto:roua@example.com", icon: "✉" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "GitHub", href: "#", icon: "</>" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 100%, oklch(0.3 0.2 268 / 0.4), transparent 60%)" }} />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading index="07" kicker="Contact" title="Travaillons ensemble." />

        <div className="grid gap-12 md:grid-cols-5">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass space-y-5 rounded-2xl p-8 md:col-span-3"
          >
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Nom</label>
              <input required type="text" className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</label>
              <input required type="email" className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Message</label>
              <textarea required rows={4} className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-primary" />
            </div>

            <Magnetic>
              <button
                type="submit"
                disabled={loading || sent}
                className="group relative mt-4 inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-7 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-glow disabled:opacity-80"
              >
                <motion.span
                  key={sent ? "sent" : loading ? "loading" : "idle"}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {sent ? "✓ Message envoyé" : loading ? "Envoi…" : "Envoyer le message"}
                </motion.span>
                {!sent && !loading && <span className="transition-transform group-hover:translate-x-1">→</span>}
              </button>
            </Magnetic>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-2"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Une idée, un projet, une opportunité ? Écrivez-moi — je réponds sous 24h.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {SOCIALS.map((s, i) => (
                <Magnetic key={s.label} strength={0.2}>
                  <motion.a
                    href={s.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass flex items-center gap-4 rounded-xl px-5 py-4 transition-all hover:bg-secondary/50"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-mono text-sm text-primary-glow">
                      {s.icon}
                    </span>
                    <span className="text-sm uppercase tracking-[0.25em]">{s.label}</span>
                    <span className="ml-auto text-muted-foreground">→</span>
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
