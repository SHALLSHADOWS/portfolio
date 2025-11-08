import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { PROCESS_STEPS } from "../data/process";
import { useTranslation } from "react-i18next";

export function ProcessSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section id="process" className="border-y border-white/10 bg-white/[0.03] py-20">
      <Container className="space-y-14">
        <motion.div
          className="max-w-3xl space-y-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t("process.title")}
          </h2>
          <p className="text-slate-300">{t("process.description")}</p>
        </motion.div>

        <div className="relative">
          <span
            aria-hidden
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-300/20 via-white/20 to-indigo-500/30 md:block"
          />
          <div className="grid gap-10">
            {PROCESS_STEPS.map((stepKey, index) => (
              <motion.article
                key={stepKey}
                className="relative grid gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-6 transition hover:border-emerald-300/40 hover:bg-slate-900/80 md:grid-cols-[auto_1fr]"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white md:flex">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="flex md:hidden">
                    <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">
                    {t(`process.steps.${stepKey}.title`)}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {t(`process.steps.${stepKey}.description`)}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

