import { motion } from "framer-motion";
import { Scramble } from "./Scramble";

export function SectionHeading({ index, kicker, title }: { index: string; kicker: string; title: string }) {
  return (
    <div className="mb-16 flex flex-col gap-3">
      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span className="text-primary-glow">{index}</span>
        <span className="h-px w-10 bg-border" />
        <span>{kicker}</span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl font-light tracking-tight md:text-7xl"
      >
        <Scramble text={title} />
      </motion.h2>
    </div>
  );
}
