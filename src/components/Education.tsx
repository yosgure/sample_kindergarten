"use client";

import Section from "./Section";
import { SiteData } from "@/lib/useSiteData";

export default function Education({ site }: { site?: SiteData | null }) {
  const edu = site?.education;
  if (!edu) return null;

  const philosophy = edu.philosophy || "";
  const curriculum = edu.curriculum || "";
  const methods = Array.isArray(edu.methods)
    ? edu.methods.filter((m: { title: string }) => m.title && m.title.trim())
    : [];

  if (!philosophy && !curriculum && methods.length === 0) return null;

  return (
    <Section id="education" enTitle="Education" jpTitle="教育方針">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {philosophy && (
          <p
            className="text-center mb-10"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: 2.2,
              color: "var(--text)",
              whiteSpace: "pre-line",
            }}
          >
            {philosophy}
          </p>
        )}

        {methods.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
            {methods.map(
              (
                method: { title: string; description: string; image: string },
                i: number
              ) => (
                <div
                  key={i}
                  className="p-6"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  {method.image && (
                    <img
                      src={method.image}
                      alt={method.title}
                      className="w-full mb-4 object-cover"
                      style={{
                        aspectRatio: "16/9",
                        borderRadius: "var(--radius-sm)",
                      }}
                    />
                  )}
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.0625rem",
                      color: "var(--text)",
                      fontWeight: 500,
                      marginBottom: 8,
                    }}
                  >
                    {method.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 2,
                      color: "var(--text)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {method.description}
                  </p>
                </div>
              )
            )}
          </div>
        )}

        {curriculum && (
          <div
            className="p-6 md:p-8"
            style={{
              backgroundColor: "var(--bg-alt)",
              borderRadius: "var(--radius-md)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8125rem",
                color: "var(--accent)",
                fontWeight: 500,
                marginBottom: 8,
                letterSpacing: "0.04em",
              }}
            >
              カリキュラム
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 2,
                color: "var(--text)",
                whiteSpace: "pre-line",
              }}
            >
              {curriculum}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
