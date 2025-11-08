import { useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download, ExternalLink } from "lucide-react";
import { Container } from "../components/ui/Container";
import { CvPreviewDialog } from "../components/cv/CvPreviewDialog";
import { useTranslation } from "react-i18next";

export function CvSection(): JSX.Element {
  const [previewOpen, setPreviewOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const { t } = useTranslation();

  const cvUrl = useMemo(() => {
    const base = import.meta.env.BASE_URL;
    if (base.startsWith("http")) {
      return new URL("cv/index.html", base).toString();
    }
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    return `${origin}${base.replace(/\/?$/, "/")}cv/index.html`;
  }, []);

  const handleOpenPreview = useCallback(() => {
    setPreviewOpen(true);
  }, []);

  const handleClosePreview = useCallback(() => {
    setPreviewOpen(false);
  }, []);

  const handleDownloadPdf = useCallback(() => {
    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage("print-cv", "*");
    } else {
      window.open(cvUrl, "_blank", "noopener,noreferrer");
    }
  }, [cvUrl]);

  const insights = t("cvSection.insightsList", { returnObjects: true }) as string[];

  return (
    <section id="cv" className="border-b border-white/10 bg-white/[0.02] py-20">
      <Container className="space-y-14">
        <motion.div
          className="max-w-3xl space-y-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t("cvSection.title")}
          </h2>
          <p className="text-slate-300">{t("cvSection.description")}</p>
        </motion.div>

        <motion.div
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="text-sm font-medium text-slate-200">{t("cvSection.previewTitle")}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleOpenPreview}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {t("cvSection.openLabel")}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  <Download className="h-3.5 w-3.5" />
                  {t("cvSection.downloadLabel")}
                </button>
              </div>
            </div>
            <div className="h-[520px] overflow-hidden">
              <iframe
                ref={iframeRef}
                title={t("cvSection.previewTitle")}
                src={cvUrl}
                className="h-full w-full border-0 bg-white"
              />
            </div>
          </div>

          <div className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/70 p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                {t("cvSection.panelBadge")}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {t("cvSection.panelTitle")}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {t("cvSection.panelDescription")}
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              {insights.map((insight) => (
                <li key={insight} className="flex items-center gap-3">
                  <CheckCircle2 aria-hidden className="h-4 w-4 text-emerald-300" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>

      <CvPreviewDialog open={previewOpen} onClose={handleClosePreview} cvUrl={cvUrl} />
    </section>
  );
}

