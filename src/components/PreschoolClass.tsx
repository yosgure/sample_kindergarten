"use client";

import Section from "./Section";
import { SiteData } from "@/lib/useSiteData";

export default function PreschoolClass({ site }: { site?: SiteData | null }) {
  const data = site?.preschoolClass;
  if (!data) return null;

  const name = data.name || "";
  const description = data.description || "";
  const schedule = data.schedule || "";

  if (!name && !description) return null;

  return (
    <Section id="preschool" enTitle="Toddler Class" jpTitle="未就園児クラス">
      <div
        className="p-8 md:p-10 mx-auto"
        style={{
          maxWidth: 720,
          backgroundColor: "var(--bg-alt)",
          borderRadius: "var(--radius-md)",
        }}
      >
        {name && (
          <h3
            className="text-center mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.25rem",
              color: "var(--text)",
              fontWeight: 500,
            }}
          >
            {name}
          </h3>
        )}

        {description && (
          <p
            className="mb-6"
            style={{
              fontSize: "0.9375rem",
              lineHeight: 2.2,
              color: "var(--text)",
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </p>
        )}

        {schedule && (
          <div
            className="p-5"
            style={{
              backgroundColor: "var(--bg)",
              borderRadius: "var(--radius-sm)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8125rem",
                color: "var(--accent)",
                fontWeight: 500,
                marginBottom: 6,
                letterSpacing: "0.04em",
              }}
            >
              開催日程
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                color: "var(--text)",
                whiteSpace: "pre-line",
              }}
            >
              {schedule}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
