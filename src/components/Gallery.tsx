"use client";

import { useInView } from "./useInView";
import { SiteData } from "@/lib/useSiteData";

export default function Gallery({ site }: { site?: SiteData | null }) {
  const { ref, isInView } = useInView(0.05);

  const images = site?.gallery?.images;
  if (!Array.isArray(images)) return null;

  const validImages = images.filter(
    (img: { url: string; caption?: string }) => img.url && img.url.trim()
  );
  if (validImages.length === 0) return null;

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
        {validImages.slice(0, 6).map(
          (img: { url: string; caption?: string }, i: number) => (
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
                src={img.url}
                alt={img.caption || ""}
                className="w-full object-cover"
                style={{
                  aspectRatio: "1/1",
                  borderRadius: "var(--radius-sm)",
                }}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
