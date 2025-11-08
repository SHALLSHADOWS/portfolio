import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ExternalLink, Eye, X } from "lucide-react";
import { Container } from "../components/ui/Container";
import { HIGHLIGHT_PROJECTS, type ProjectMedia } from "../data/projects";
import { RevealCard } from "../components/animations/RevealCard";
import { useTranslation } from "react-i18next";

export function ProjectsSection(): JSX.Element {
  const { t } = useTranslation();
  const assetBase = useMemo(
    () => `${import.meta.env.BASE_URL.replace(/\/?$/, "/")}`,
    []
  );
  const resolveAsset = useCallback(
    (path: string) => `${assetBase}${encodeURI(path.replace(/^\//, ""))}`,
    [assetBase]
  );
  const [preview, setPreview] = useState<{
    title: string;
    media: ProjectMedia;
  } | null>(null);

  const openPreview = useCallback((title: string, media: ProjectMedia) => {
    setPreview({ title, media });
  }, []);

  const closePreview = useCallback(() => {
    setPreview(null);
  }, []);

  useEffect(() => {
    if (!preview) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closePreview();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closePreview, preview]);

  const figmaEmbedUrl = useMemo(() => {
    if (!preview?.media.figmaUrl) {
      return null;
    }

    return `https://www.figma.com/embed?embed_host=astra&url=${encodeURIComponent(preview.media.figmaUrl)}`;
  }, [preview]);

  return (
    <section id="projets" className="border-t border-white/10 py-20">
      <Container className="space-y-14">
        <motion.div
          className="max-w-3xl space-y-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t("projects.title")}
          </h2>
          <p className="text-slate-300">{t("projects.description")}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHT_PROJECTS.map((project, index) => {
            const copy = t(project.translationKey, {
              returnObjects: true
            }) as { title: string; subtitle: string; result: string };
            const media = project.media;

            return (
              <RevealCard
                key={project.slug}
                index={index}
                className="flex h-full flex-col gap-5"
              >
                {media?.cover ? (
                  <div className="overflow-hidden rounded-xl border border-white/10 shadow-glow">
                    <img
                      src={resolveAsset(media.cover)}
                      alt={`${copy.title} preview`}
                      className="h-48 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <header className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{copy.title}</h3>
                  <p className="text-sm text-slate-300">{copy.subtitle}</p>
                </header>
                <p className="text-sm text-emerald-200/90">{copy.result}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 transition hover:border-white/30 hover:bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {media ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {media.gallery?.length ? (
                      <button
                        type="button"
                        onClick={() => openPreview(copy.title, media)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:border-emerald-300/50 hover:bg-white/10"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        {t("projects.cta.preview")}
                      </button>
                    ) : null}
                    {media.figmaUrl ? (
                      <a
                        href={media.figmaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-slate-200"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {t("projects.cta.openFigma")}
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </RevealCard>
            );
          })}
        </div>
      </Container>

      {preview
        ? createPortal(
            <div
              className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 px-4 py-10 backdrop-blur"
              role="dialog"
              aria-modal="true"
              aria-label={preview.title}
            >
              <div className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl">
                <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <p className="text-sm font-medium text-slate-200">{preview.title}</p>
                  <button
                    type="button"
                    onClick={closePreview}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-white/30 hover:bg-white/10"
                    aria-label={t("actions.close")}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </header>
                <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
                  {figmaEmbedUrl ? (
                    <div className="h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-inner">
                      <iframe
                        src={figmaEmbedUrl}
                        title={`${preview.title} - Figma preview`}
                        className="h-full w-full"
                        loading="lazy"
                        allowFullScreen
                      />
                    </div>
                  ) : null}
                  {preview.media.gallery?.length ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {preview.media.gallery.map((image) => (
                        <img
                          key={image}
                          src={resolveAsset(image)}
                          alt={`${preview.title}`}
                          className="h-full w-full rounded-2xl border border-white/10 bg-slate-900 object-cover"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </section>
  );
}

