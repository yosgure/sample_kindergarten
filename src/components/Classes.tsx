"use client";

import Section from "./Section";
import { SiteData } from "@/lib/useSiteData";

const classColors = ["var(--accent)", "var(--green)", "var(--blue)"];

export default function Classes({ site }: { site?: SiteData | null }) {
  const raw = site?.classes;
  if (!Array.isArray(raw)) return null;

  const validClasses = raw.filter(
    (c: { name: string; description?: string; capacity?: string }) =>
      c.name && c.name.trim() && (c.description?.trim() || c.capacity?.trim())
  );
  if (validClasses.length === 0) return null;

  return (
    <Section id="classes" enTitle="Classes" jpTitle="クラス紹介" alt>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        style={{ maxWidth: 900, margin: "0 auto" }}
      >
        {validClasses.map(
          (
            cls: {
              name: string;
              ageRange: string;
              capacity: string;
              description: string;
            },
            i: number
          ) => (
            <div
              key={i}
              className="p-6 md:p-7"
              style={{
                backgroundColor: "var(--bg)",
                borderRadius: "var(--radius-md)",
                borderTop: `3px solid ${classColors[i % classColors.length]}`,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.125rem",
                  color: "var(--text)",
                  fontWeight: 500,
                  marginBottom: 4,
                }}
              >
                {cls.name}
              </h3>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-sub)",
                  marginBottom: 12,
                  fontFamily: "var(--font-heading)",
                }}
              >
                {cls.ageRange}
                {cls.capacity && ` ・ 定員${cls.capacity}名`}
              </p>
              {cls.description && (
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 2,
                    color: "var(--text)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {cls.description}
                </p>
              )}
            </div>
          )
        )}
      </div>
    </Section>
  );
}
