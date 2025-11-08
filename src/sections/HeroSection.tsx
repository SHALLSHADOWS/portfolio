import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { HERO_MEDIA } from "../data/hero";
import { PROFILE, CALL_TO_ACTION } from "../data/profile";
import { SplitText } from "../components/animations/SplitText";
import { useTranslation } from "react-i18next";

export function HeroSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative overflow-hidden py-20">
      <Container className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-200/80">
            {t("hero.availability")}
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            <SplitText text={t("hero.heading")} />
          </h1>
          <p className="text-balance max-w-2xl text-lg text-slate-300 md:text-xl">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projets"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              {t("hero.primaryCta")}
            </a>
            <a
              href={CALL_TO_ACTION.mailto}
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              {t("hero.secondaryCta")}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/50 shadow-[0_40px_120px_-45px_rgba(56,189,248,0.65)]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.3),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.25),transparent_55%)]" />
          <div className="relative">
            <img
              src={HERO_MEDIA.portraitSrc}
              alt={t("hero.portraitAlt")}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05)_0%,rgba(2,6,23,0.55)_60%,rgba(2,6,23,0.9)_100%)]" />
          </div>
          <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur">
            {t("hero.card.role")}
          </div>
          <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/15 bg-slate-950/75 p-5 text-sm text-slate-200 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold uppercase tracking-wide text-white">
                {PROFILE.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{PROFILE.name}</p>
                <p className="text-xs text-slate-400">{t("profile.title")}</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-100">{t("hero.card.focus")}:</span>
                <span>{t("hero.card.focusValue")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span aria-hidden className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{t("hero.card.location")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

