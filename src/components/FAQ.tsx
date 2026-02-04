"use client";

import { useState } from "react";
import Section from "./Section";
import { SiteData } from "@/lib/useSiteData";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 text-left transition-colors"
        style={{ padding: "1.25rem 0" }}
      >
        <div className="flex items-start gap-3">
          <span
            className="flex-shrink-0"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              color: "var(--accent)",
              fontWeight: 500,
              lineHeight: 1.7,
            }}
          >
            Q
          </span>
          <span
            style={{
              fontSize: "0.9375rem",
              color: "var(--text)",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            {question}
          </span>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 mt-1 transition-transform duration-300"
          style={{
            color: "var(--text-sub)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "500px" : "0", opacity: open ? 1 : 0 }}
      >
        <div className="flex items-start gap-3 pb-5">
          <span
            className="flex-shrink-0"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              color: "var(--text-sub)",
              fontWeight: 500,
              lineHeight: 1.7,
            }}
          >
            A
          </span>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 2,
              color: "var(--text)",
              whiteSpace: "pre-line",
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ site }: { site?: SiteData | null }) {
  // 配列形式 [{question, answer}] と {items: [{question, answer}]} の両方に対応
  const rawFaq = site?.faq;
  const items = Array.isArray(rawFaq) ? rawFaq : rawFaq?.items;
  if (!Array.isArray(items)) return null;

  const validItems = items.filter(
    (q: { question: string; answer: string }) =>
      q.question && q.question.trim() && q.answer && q.answer.trim()
  );
  if (validItems.length === 0) return null;

  return (
    <Section id="faq" enTitle="FAQ" jpTitle="よくある質問">
      <div className="mx-auto" style={{ maxWidth: 720 }}>
        {validItems.map(
          (item: { question: string; answer: string }, i: number) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          )
        )}
      </div>
    </Section>
  );
}
