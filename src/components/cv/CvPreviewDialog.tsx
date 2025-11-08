import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

type CvPreviewDialogProps = {
  open: boolean;
  onClose: () => void;
  cvUrl: string;
};

export function CvPreviewDialog({
  open,
  onClose,
  cvUrl
}: CvPreviewDialogProps): JSX.Element | null {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-4 py-10 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label={t("cvDialog.title")}
      ref={dialogRef}
    >
      <div className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl">
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <p className="text-sm font-medium text-slate-200">{t("cvDialog.title")}</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-white/30 hover:bg-white/10"
            aria-label={t("actions.close")}
          >
            <X className="h-4 w-4" />
          </button>
        </header>
        <div className="relative flex-1 overflow-hidden">
          <iframe
            title={t("cvSection.previewTitle")}
            src={cvUrl}
            className="h-full w-full bg-white"
            loading="lazy"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}


