"use client";

import Section from "./Section";
import { SiteData } from "@/lib/useSiteData";

export default function Safety({ site }: { site?: SiteData | null }) {
  const data = site?.safety;
  if (!data) return null;

  const intro = data.intro || "";
  const measures = Array.isArray(data.measures)
    ? data.measures.filter((m: { title: string }) => m.title && m.title.trim())
    : [];

  if (!intro && measures.length === 0) return null;

  return (
    <Section id="safety" enTitle="Safety" jpTitle="安全対策" alt>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {intro && (
          <p
            className="text-center mb-10"
            style={{
              fontSize: "0.9375rem",
              lineHeight: 2.2,
              color: "var(--text)",
              whiteSpace: "pre-line",
            }}
          >
            {intro}
          </p>
        )}

        {measures.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {measures.map(
              (m: { title: string; description: string }, i: number) => (
                <div
                  key={i}
                  className="flex gap-4 p-5"
                  style={{
                    backgroundColor: "var(--bg)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: "var(--green)",
                      opacity: 0.2,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--green)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 12l2 2 4-4" />
                      <path d="M12 2l7.5 4v6c0 5-3.5 9.5-7.5 11-4-1.5-7.5-6-7.5-11V6L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.9375rem",
                        color: "var(--text)",
                        fontWeight: 500,
                        marginBottom: 4,
                      }}
                    >
                      {m.title}
                    </h3>
                    {m.description && (
                      <p
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.8,
                          color: "var(--text-sub)",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {m.description}
                      </p>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
