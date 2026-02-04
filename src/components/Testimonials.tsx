"use client";

import Section from "./Section";
import { SiteData } from "@/lib/useSiteData";

export default function Testimonials({ site }: { site?: SiteData | null }) {
  const items = site?.testimonials?.items;
  if (!Array.isArray(items)) return null;

  const validItems = items.filter(
    (t: { text: string; name?: string }) => t.text && t.text.trim()
  );
  if (validItems.length === 0) return null;

  return (
    <Section id="testimonials" enTitle="Voices" jpTitle="保護者の声" alt>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        style={{ maxWidth: 880, margin: "0 auto" }}
      >
        {validItems.map(
          (
            item: {
              text: string;
              name?: string;
              relation?: string;
            },
            i: number
          ) => (
            <div
              key={i}
              className="p-6 md:p-8"
              style={{
                backgroundColor: "var(--bg)",
                borderRadius: "var(--radius-md)",
              }}
            >
              {/* Quote mark */}
              <div
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  lineHeight: 1,
                  color: "var(--accent-light)",
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 2,
                  color: "var(--text)",
                }}
              >
                {item.text}
              </p>
              {(item.name || item.relation) && (
                <p
                  className="mt-4"
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-sub)",
                    fontFamily: "var(--font-heading)",
                    letterSpacing: "0.04em",
                  }}
                >
                  — {item.relation && `${item.relation} `}
                  {item.name || ""}
                </p>
              )}
            </div>
          )
        )}
      </div>
    </Section>
  );
}
