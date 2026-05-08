import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const QUOTES = [
  { name: "Sarah Belkacem", role: "Lead Designer", text: "Roua transforme une maquette en expérience vivante. Une rigueur rare et un œil créatif affûté." },
  { name: "Yanis Moreau", role: "CTO · Aurora", text: "Code propre, animations soignées, livraison à l'heure. Un vrai luxe à travailler avec elle." },
  { name: "Inès Kacimi", role: "Product Manager", text: "Elle ne suit pas les briefs — elle les élève. Chaque détail compte, chaque transition raconte." },
  { name: "Karim Hadj", role: "Founder · Lumen", text: "Le genre de développeuse qui rend un produit instantanément haut de gamme." },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="05" kicker="Recommandations" title="Témoignages." />
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...QUOTES, ...QUOTES].map((q, i) => (
            <div key={i} className="glass shimmer w-[360px] shrink-0 rounded-2xl p-7 md:w-[420px]">
              <p className="text-base leading-relaxed text-foreground/90">"{q.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-display text-lg">{q.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{q.role}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
