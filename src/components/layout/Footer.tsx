import { Container } from "../ui/Container";
import { CONTACT_LINKS, NAV_SECTIONS } from "../../data/navigation";
import { PROFILE } from "../../data/profile";
import { useTranslation } from "react-i18next";

export function Footer(): JSX.Element {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur">
      <Container className="grid gap-6 py-10 md:grid-cols-2 md:items-center">
        <div className="space-y-3 text-sm text-slate-400">
          <p className="text-base font-semibold text-slate-200">
            {PROFILE.name}
          </p>
          <p>{t("profile.title")}</p>
          <p>{t("footer.availability")}</p>
        </div>
        <div className="space-y-3 text-sm text-slate-400 md:justify-self-end">
          <div className="flex flex-wrap gap-3">
            {NAV_SECTIONS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition hover:border-white/30 hover:bg-white/10"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${CONTACT_LINKS.email}`}
            className="block text-slate-200 transition hover:text-white"
          >
            {CONTACT_LINKS.email}
          </a>
          <a
            href={CONTACT_LINKS.github}
            className="block transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            github.com/SHALLSHADOWS
          </a>
          <a
            href={CONTACT_LINKS.portfolio}
            className="block transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            israelaroukoume.com
          </a>
        </div>
      </Container>
      <div className="border-t border-white/5">
        <Container className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-slate-500 md:flex-row">
          <span>
            © {new Date().getFullYear()} Lem Israel Aroukoume. {t("footer.rights")}
          </span>
          <span>{t("footer.deployed")}</span>
        </Container>
      </div>
    </footer>
  );
}

