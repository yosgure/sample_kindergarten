"use client";

import { useInView } from "./useInView";
import { LeafIllustration } from "./Illustrations";
import { SiteData } from "@/lib/useSiteData";

export default function InquirySection({ site }: { site?: SiteData | null }) {
  const { ref, isInView } = useInView(0.1);
  const contact = site?.contact;
  const tel = contact?.tel;
  const email = contact?.email;
  const briefing = site?.briefing;

  if (!tel && !email) return null;

  return (
    <section
      id="inquiry"
      ref={ref}
      style={{
        backgroundColor: "var(--bg-alt)",
        padding: "clamp(3rem, 8vw, 5rem) 0",
      }}
    >
      <div
        className="mx-auto px-5 md:px-10 text-center"
        style={{
          maxWidth: 680,
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        }}
      >
        <LeafIllustration className="w-7 h-7 mx-auto mb-5 opacity-40" />

        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
            color: "var(--text)",
            fontWeight: 500,
            marginBottom: "0.75rem",
          }}
        >
          園のことをもっと知りたい方へ
        </h2>

        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 2,
            color: "var(--text)",
            marginBottom: "2rem",
          }}
        >
          見学は随時受け付けております。
          <br className="hidden sm:inline" />
          お子さまと一緒に、園の雰囲気を感じてみてください。
        </p>

        {/* 説明会日程がある場合 */}
        {briefing?.date && (
          <div
            className="mb-8 p-5 mx-auto"
            style={{
              backgroundColor: "var(--bg)",
              borderRadius: "var(--radius-md)",
              maxWidth: 440,
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
              次回の入園説明会
            </p>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.0625rem",
                color: "var(--text)",
                fontWeight: 500,
              }}
            >
              {briefing.date}
            </p>
            {briefing.note && (
              <p
                className="mt-1"
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-sub)",
                }}
              >
                {briefing.note}
              </p>
            )}
          </div>
        )}

        {/* 連絡先 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {tel && (
            <a
              href={`tel:${tel.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--bg)",
                padding: "0.875rem 2rem",
                borderRadius: "var(--radius-md)",
                fontSize: "0.9375rem",
                color: "var(--text)",
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                letterSpacing: "0.04em",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {tel}
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
                padding: "0.875rem 2rem",
                borderRadius: "var(--radius-md)",
                fontSize: "0.875rem",
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                letterSpacing: "0.06em",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 6L2 7" />
              </svg>
              メールでのお問い合わせ
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
