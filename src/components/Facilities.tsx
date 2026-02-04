"use client";

import Section from "./Section";
import { SiteData } from "@/lib/useSiteData";

export default function Facilities({ site }: { site?: SiteData | null }) {
  const raw = site?.facilities;
  if (!Array.isArray(raw)) return null;

  const valid = raw.filter(
    (f: { name: string }) => f.name && f.name.trim()
  );
  if (valid.length === 0) return null;

  return (
    <Section id="facilities" enTitle="Facilities" jpTitle="施設紹介">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        style={{ maxWidth: 880, margin: "0 auto" }}
      >
        {valid.map(
          (
            item: { name: string; description: string; image: string },
            i: number
          ) => (
            <div
              key={i}
              className="overflow-hidden"
              style={{
                backgroundColor: "var(--bg-alt)",
                borderRadius: "var(--radius-md)",
              }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/10" }}
                />
              )}
              <div className="p-5 md:p-6">
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    color: "var(--text)",
                    fontWeight: 500,
                    marginBottom: 6,
                  }}
                >
                  {item.name}
                </h3>
                {item.description && (
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 2,
                      color: "var(--text)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </Section>
  );
}
