import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*";

export function Scramble({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = text.length;
    const id = setInterval(() => {
      frame++;
      const reveal = Math.floor(frame / 2);
      setOut(
        text
          .split("")
          .map((c, i) => (i < reveal || c === " " ? c : CHARS[Math.floor(Math.random() * CHARS.length)]))
          .join("")
      );
      if (reveal >= total) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [inView, text]);

  return (
    <motion.span ref={ref} className={className} aria-label={text}>
      {out}
    </motion.span>
  );
}
