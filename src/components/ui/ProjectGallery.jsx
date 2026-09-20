"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";

const ProjectGallery = ({ images, title, priority = false }) => {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const count = images.length;
  const hasNav = count > 1;

  const srcOf = (img) =>
    typeof img === "string" ? img : img.src ?? img.href ?? img;
  const currentSrc = srcOf(images[index]);

  const go = (dir) => setIndex((i) => (i + dir + count) % count);
  const prev = (e) => {
    if (e) e.stopPropagation();
    go(-1);
  };
  const next = (e) => {
    if (e) e.stopPropagation();
    go(1);
  };

  const openLightbox = () => {
    if (hasNav) setLightbox(true);
  };

  return (
    <>
      <div
        className={`group/image relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-mac-border bg-mac-bg shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#1e2127] dark:shadow-none transition-colors duration-300 ${
          hasNav ? "cursor-zoom-in" : ""
        }`}
        onClick={hasNav ? openLightbox : undefined}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-500 ${
              i === index
                ? "opacity-100 group-hover/image:scale-105"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={img}
              alt={`${title} preview ${i + 1} of ${count}`}
              fill
              sizes="(max-width: 768px) 100vw, 64rem"
              priority={priority && i === 0}
              className="object-contain"
            />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/image:bg-black/10">
          <Maximize2
            size={28}
            className="text-white opacity-0 drop-shadow-md transition-opacity duration-300 group-hover/image:opacity-100"
          />
        </div>

        {hasNav && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-mac-border bg-white/90 p-1.5 text-mac-text shadow-sm transition-all hover:scale-110 hover:bg-white active:scale-95 dark:border-white/15 dark:bg-white/[0.08] dark:text-white dark:hover:bg-white/[0.15]"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {hasNav && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-mac-border bg-white/90 p-1.5 text-mac-text shadow-sm transition-all hover:scale-110 hover:bg-white active:scale-95 dark:border-white/15 dark:bg-white/[0.08] dark:text-white dark:hover:bg-white/[0.15]"
          >
            <ChevronRight size={18} />
          </button>
        )}

        {hasNav && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-2 py-1 backdrop-blur-sm">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === index ? "scale-125 bg-od-orange" : "bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}

        {hasNav && (
          <div className="absolute right-3 top-3 z-10 rounded border border-white/20 bg-black/80 px-2 py-1 font-mono text-[10px] font-bold text-white">
            {index + 1} / {count}
          </div>
        )}
      </div>

      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setLightbox(false)}
          >
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close preview"
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>

          {hasNav && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {hasNav && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight size={22} />
            </button>
          )}

          <div
            className="flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSrc}
              alt={`${title} preview ${index + 1} of ${count}`}
              className="max-h-[88vh] max-w-[94vw] rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>,
          document.body
        )}
    </>
  );
};

export default ProjectGallery;