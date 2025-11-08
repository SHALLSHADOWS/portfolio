import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { EXPERTISE_AREAS } from "../data/expertise";
import { RevealCard } from "../components/animations/RevealCard";
import { useTranslation } from "react-i18next";

import { CheckCircle2 } from "lucide-react";

export function ExpertiseSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section id="expertise" className="border-t border-white/10 bg-white/5 py-20">
      <Container className="space-y-14">
        <motion.div
          className="max-w-3xl space-y-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t("expertise.title")}
          </h2>
          <p className="text-slate-300">{t("expertise.description")}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {EXPERTISE_AREAS.map((key, index) => {
            const points = t(`expertise.areas.${key}.points`, {
              returnObjects: true
            }) as string[];

            return (
              <RevealCard key={key} index={index} className="flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold text-white">
                  {t(`expertise.areas.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {t(`expertise.areas.${key}.description`)}
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-left transition duration-300 group-hover:text-emerald-200"
                    >
                      <CheckCircle2 aria-hidden className="h-4 w-4 text-emerald-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </RevealCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

