import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "../components/ui/Container";
import { CALL_TO_ACTION } from "../data/profile";
import { CONTACT_LINKS } from "../data/navigation";
import { useTranslation } from "react-i18next";

export function ContactSection(): JSX.Element {
  const { t } = useTranslation();
  const nextSteps = t("contact.nextStep.steps", { returnObjects: true }) as string[];

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-20"
    >
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="text-slate-300">{t("contact.description")}</p>
          <div className="space-y-2 text-sm text-slate-300">
            <a
              href={CALL_TO_ACTION.mailto}
              className="flex w-fit items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-300/40 hover:bg-white/10"
            >
              {t("contact.emailCta")}
            </a>
            <p>{t("contact.availability")}</p>
            <p className="flex items-center gap-2">
              <MapPin aria-hidden className="h-4 w-4 text-emerald-300" />
              {t("contact.location")}
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-400">
              <a
                href={CALL_TO_ACTION.calendly}
                className="rounded-full border border-white/10 px-3 py-1 transition hover:border-white/30 hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                {t("contact.links.calendly")}
              </a>
              <a
                href={CALL_TO_ACTION.whatsapp}
                className="rounded-full border border-white/10 px-3 py-1 transition hover:border-white/30 hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                {t("contact.links.whatsapp")}
              </a>
              <a
                href={CONTACT_LINKS.github}
                className="rounded-full border border-white/10 px-3 py-1 transition hover:border-white/30 hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                {t("contact.links.github")}
              </a>
            </div>
          </div>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-200/80">
              {t("contact.nextStep.badge")}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {t("contact.nextStep.title")}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{t("contact.nextStep.description")}</p>
            <div className="mt-6 flex flex-col gap-2 text-xs text-slate-400">
              <span>{t("contact.nextStep.listLabel")}</span>
              <ol className="space-y-2">
                {nextSteps.map((step) => (
                  <li key={step} className="flex items-center gap-2">
                    <ArrowRight aria-hidden className="h-4 w-4 text-emerald-300" />
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          <motion.form
            action="https://formsubmit.co/aroukoumeisrael@gmail.com"
            method="POST"
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
              {t("contact.form.badge")}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {t("contact.form.title")}
            </h3>
            <p className="mt-2 text-xs text-slate-400">{t("contact.form.description")}</p>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                {t("contact.form.nameLabel")}
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t("contact.form.namePlaceholder")}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:bg-white/10"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                {t("contact.form.emailLabel")}
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:bg-white/10"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                {t("contact.form.messageLabel")}
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:bg-white/10"
                />
              </label>
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://israelaroukoume.com/merci" />

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              {t("contact.form.submit")}
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

