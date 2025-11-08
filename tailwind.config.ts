import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "Verdana", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          foreground: "#f0f9ff"
        }
      },
      boxShadow: {
        glow: "0 25px 70px -25px rgba(14, 165, 233, 0.35)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(59, 130, 246, 0.25), transparent 60%)",
        "grid-pattern":
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

