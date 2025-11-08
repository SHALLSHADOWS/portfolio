import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type RevealCardProps = PropsWithChildren<{
  className?: string;
  index?: number;
}>;

export function RevealCard({
  className,
  children,
  index = 0
}: RevealCardProps): JSX.Element {
  return (
    <motion.div
      className={clsx(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition duration-300 hover:border-white/40 hover:bg-white/[0.07]",
        className
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top, rgba(79, 70, 229, 0.35), transparent 60%)"
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}


