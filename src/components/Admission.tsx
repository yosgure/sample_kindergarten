"use client";

import Section from "./Section";
import { HouseIllustration } from "./Illustrations";
import { SiteData } from "@/lib/useSiteData";

const defaultInfo = [
  { label: "対象年齢", value: "満3歳〜5歳（年少・年中・年長）" },
  { label: "定員", value: "各クラス 20名" },
  { label: "保育時間", value: "8:00〜15:30（延長保育 18:30まで）" },
  { label: "給食", value: "週5日 自園調理（アレルギー対応可）" },
  { label: "制服", value: "なし（動きやすい服装で登園）" },
  { label: "バス送迎", value: "あり（2ルート）" },
];

export default function Admission({ site }: { site?: SiteData | null }) {
  const rawFees = site?.admission?.fees;
  const fees = Array.isArray(rawFees) ? rawFees.filter((f: { item: string }) => f.item) : [];
  const hasFees = fees.length > 0;
  const text = site?.admission?.text;
  const schedule = site?.admission?.schedule;

  // If no CMS data, use default
  const useDefault = !text && !hasFees;

  return (
    <Section id="admission" enTitle="Admission" jpTitle="入園案内">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div className="w-full md:w-[45%] relative">
          <img src="https://images.unsplash.com/photo-1587654780131-39272e2a1588?w=800&h=1000&fit=crop&q=80" alt="園舎" className="w-full object-cover" style={{ aspectRatio: "4/5", borderRadius: "var(--radius-sm)" }} />
          <HouseIllustration className="absolute -bottom-5 -left-5 w-12 h-12 opacity-25 hidden md:block" />
        </div>

        <div className="w-full md:w-[55%]">
          {useDefault ? (
            <div className="space-y-0">
              {defaultInfo.map((item, i) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4" style={{ padding: "1rem 0", borderBottom: i < defaultInfo.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                  <span className="flex-shrink-0" style={{ fontFamily: "var(--font-heading)", fontSize: "0.8125rem", color: "var(--accent)", fontWeight: 500, width: 100, letterSpacing: "0.04em" }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: "0.9375rem", color: "var(--text)", lineHeight: 1.8 }}>{item.value}</span>
                </div>
              ))}
            </div>
          ) : (
            <>
              {text && <p className="mb-6" style={{ fontSize: "0.9375rem", lineHeight: 2, color: "var(--text)", whiteSpace: "pre-line" }}>{text}</p>}
              {hasFees && (
                <div className="space-y-0 mb-6">
                  {fees.map((fee: { item: string; amount: string }, i: number) => (
                    <div key={i} className="flex justify-between" style={{ padding: "0.75rem 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                      <span style={{ fontSize: "0.9375rem", color: "var(--text)" }}>{fee.item}</span>
                      <span style={{ fontSize: "0.9375rem", color: "var(--text)", fontWeight: 500 }}>{fee.amount}</span>
                    </div>
                  ))}
                </div>
              )}
              {schedule && <p className="mb-6" style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-sub)", whiteSpace: "pre-line" }}>{schedule}</p>}
            </>
          )}

          <div className="mt-10">
            <p className="mb-4" style={{ fontFamily: "var(--font-handwrite)", fontSize: "0.875rem", color: "var(--text-sub)" }}>
              見学は随時受付中です
            </p>
            <a href="#" className="inline-block transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--accent)", color: "#fff", padding: "0.875rem 2.5rem", borderRadius: "var(--radius-sm)", fontSize: "0.875rem", fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "0.08em" }}>
              見学を予約する
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
