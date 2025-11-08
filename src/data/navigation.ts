export const NAV_SECTIONS = [
  { labelKey: "nav.expertise", href: "#expertise" },
  { labelKey: "nav.projects", href: "#projets" },
  { labelKey: "nav.process", href: "#process" },
  { labelKey: "nav.cv", href: "#cv" },
  { labelKey: "nav.contact", href: "#contact" }
] as const;

export type NavigationItem = (typeof NAV_SECTIONS)[number];

export const CONTACT_LINKS = {
  email: "aroukoumeisrael@gmail.com",
  github: "https://github.com/SHALLSHADOWS",
  portfolio: "https://israelaroukoume.com"
} as const;


