"use client";

import Section from "./Section";
import { SiteData } from "@/lib/useSiteData";

export default function History({ site }: { site?: SiteData | null }) {
  const hist = site?.history;
  if (!hist) return null;

  const founded = hist.founded || "";
  const body = hist.body || "";
  const milestones = Array.isArray(hist.milestones)
    ? hist.milestones.filter((m: { year: string }) => m.year && m.year.trim())
    : [];

  if (!founded && !body && milestones.length === 0) return null;

  return (
    <Section id="history" enTitle="History" jpTitle="沿革">
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {founded && (
          <p className="text-center mb-8">
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8125rem",
                color: "var(--accent)",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              設立
            </span>
            <span
              className="ml-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                color: "var(--text)",
              }}
            >
              {founded}
            </span>
          </p>
        )}

        {body && (
          <p
            className="mb-10"
            style={{
              fontSize: "0.9375rem",
              lineHeight: 2.2,
              color: "var(--text)",
              whiteSpace: "pre-line",
            }}
          >
            {body}
          </p>
        )}

        {milestones.length > 0 && (
          <div className="space-y-0">
            {milestones.map(
              (m: { year: string; event: string }, i: number) => (
                <div
                  key={i}
                  className="flex gap-6"
                  style={{
                    padding: "1rem 0",
                    borderBottom:
                      i < milestones.length - 1
                        ? "1px solid rgba(0,0,0,0.06)"
                        : "none",
                  }}
                >
                  <span
                    className="flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9375rem",
                      color: "var(--accent)",
                      width: 80,
                    }}
                  >
                    {m.year}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.8,
                      color: "var(--text)",
                    }}
                  >
                    {m.event}
                  </span>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
