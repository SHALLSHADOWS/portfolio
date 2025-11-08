import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "../ui/Container";
import { CONTACT_LINKS, NAV_SECTIONS } from "../../data/navigation";
import { LanguageToggle } from "../ui/LanguageToggle";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

export function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigate = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#hero" className="group inline-flex items-center gap-2 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 uppercase tracking-wide transition group-hover:border-white/50 group-hover:bg-white/10">
            ia
          </span>
          <span className="text-sm font-medium text-slate-200">
            Lem Israel Aroukoume
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_SECTIONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigate}
              className="text-slate-300 transition hover:text-white"
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <a
            href={`mailto:${CONTACT_LINKS.email}`}
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/30 hover:bg-white/10"
          >
            {t("header.bookMission")}
          </a>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-100 transition hover:border-white/30 hover:bg-white/10 md:hidden"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={clsx(
          "border-t border-white/10 bg-slate-950/95 backdrop-blur-sm md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <Container className="grid gap-3 py-4">
          {NAV_SECTIONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
              onClick={handleNavigate}
            >
              {t(item.labelKey)}
            </a>
          ))}
          <LanguageToggle />
          <a
            href={`mailto:${CONTACT_LINKS.email}`}
            className="rounded-lg border border-white/10 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/10"
          >
            {t("header.bookMission")}
          </a>
        </Container>
      </div>
    </header>
  );
}

