import type { PropsWithChildren } from "react";
import clsx from "clsx";
import { Header } from "./Header";
import { Footer } from "./Footer";

type MainLayoutProps = PropsWithChildren<{
  className?: string;
}>;

export function MainLayout({ className, children }: MainLayoutProps): JSX.Element {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:24px_24px] opacity-20" />
        <div className="absolute left-1/2 top-[-240px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute left-[10%] top-[40%] h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.08),transparent_55%)]" />
      </div>

      <Header />

      <main className={clsx("flex-1", className)}>{children}</main>

      <Footer />
    </div>
  );
}

