import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { HIGHLIGHT_METRICS } from "../data/highlights";
import { RevealCard } from "../components/animations/RevealCard";
import { useTranslation } from "react-i18next";

export function HighlightsSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHT_METRICS.map((metricKey, index) => {
            const metric = t(`highlights.items.${metricKey}`, {
              returnObjects: true
            }) as { label: string; value: string; description: string };

            return (
              <RevealCard key={metricKey} index={index} className="h-full p-8">
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/80"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {metric.label}
              </motion.p>
              <motion.h3
                className="mt-4 text-4xl font-semibold text-white"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {metric.value}
              </motion.h3>
              <motion.p
                className="mt-3 text-sm text-slate-300"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {metric.description}
              </motion.p>
              </RevealCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


