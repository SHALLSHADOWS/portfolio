import { useTranslation } from "react-i18next";
import clsx from "clsx";

const LANGUAGES = [
  { code: "fr", labelKey: "language.fr" },
  { code: "en", labelKey: "language.en" }
] as const;

export function LanguageToggle(): JSX.Element {
  const { i18n, t } = useTranslation();

  const handleChange = (code: string): void => {
    void i18n.changeLanguage(code);
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      {LANGUAGES.map(({ code, labelKey }) => {
        const isActive = i18n.resolvedLanguage === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => handleChange(code)}
            className={clsx(
              "rounded-full px-2.5 py-1 text-xs font-semibold transition",
              isActive
                ? "bg-white text-slate-950 shadow"
                : "text-slate-200 hover:bg-white/10 hover:text-white"
            )}
            aria-pressed={isActive}
          >
            {t(labelKey)}
          </button>
        );
      })}
    </div>
  );
}

