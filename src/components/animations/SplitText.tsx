import { Fragment } from "react";
import { motion } from "framer-motion";

type SplitTextProps = {
  text: string;
  className?: string;
  stagger?: number;
};

export function SplitText({
  text,
  className,
  stagger = 0.04
}: SplitTextProps): JSX.Element {
  const characters = Array.from(text);

  return (
    <span className={className} aria-label={text}>
      {characters.map((char, index) => (
        <Fragment key={`${char}-${index}`}>
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: index * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.span>
        </Fragment>
      ))}
    </span>
  );
}


