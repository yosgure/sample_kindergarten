"use client";

import { useInView } from "./useInView";
import { SiteData } from "@/lib/useSiteData";

export default function Gallery({ site }: { site?: SiteData | null }) {
  const { ref, isInView } = useInView(0.05);

  // gallery.photos [{src, alt}] と gallery.images [{url, caption}] の両方に対応
  const rawPhotos = site?.gallery?.photos;
  const rawImages = site?.gallery?.images;

  type PhotoItem = { src?: string; url?: string; alt?: string; caption?: string };
  let validItems: { src: string; alt: string }[] = [];

  if (Array.isArray(rawPhotos) && rawPhotos.length > 0) {
    validItems = rawPhotos
      .filter((p: PhotoItem) => p.src && p.src.trim())
      .map((p: PhotoItem) => ({ src: p.src!, alt: p.alt || "" }));
  } else if (Array.isArray(rawImages) && rawImages.length > 0) {
    validItems = rawImages
      .filter((img: PhotoItem) => img.url && img.url.trim())
      .map((img: PhotoItem) => ({ src: img.url!, alt: img.caption || "" }));
  }

  if (validItems.length === 0) return null;

  return (
    <div
      ref={ref}
      className="overflow-hidden"
      style={{
        backgroundColor: "var(--bg)",
        padding: "clamp(1rem, 3vw, 2rem) 0",
      }}
    >
      <div className="flex gap-2 md:gap-3">
        {validItems.slice(0, 6).map((item, i) => (
          <div
            key={i}
            className="flex-1 min-w-0"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full object-cover"
              style={{
                aspectRatio: "1/1",
                borderRadius: "var(--radius-sm)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
