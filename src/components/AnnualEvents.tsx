"use client";

import Section from "./Section";
import { StarIllustration } from "./Illustrations";
import { SiteData } from "@/lib/useSiteData";

const monthLabels: Record<number, string> = {
  4: "4月", 5: "5月", 6: "6月", 7: "7月", 8: "8月", 9: "9月",
  10: "10月", 11: "11月", 12: "12月", 1: "1月", 2: "2月", 3: "3月",
};

const monthOrder = [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3];

const seasonColors: Record<number, string> = {
  4: "#F9A8B6", 5: "#7DC87D", 6: "#7ABFDB", 7: "#FFD36E",
  8: "#FF9E4A", 9: "#D4A76A", 10: "#E8834A", 11: "#C9956B",
  12: "#7EADD4", 1: "#A3C6E0", 2: "#F4B3C2", 3: "#FABE7A",
};

export default function AnnualEvents({ site }: { site?: SiteData | null }) {
  const raw = site?.annualEvents;

  // 配列形式 [{month, events}, ...] をMapに変換
  let eventsMap: Record<number, string> = {};

  if (Array.isArray(raw)) {
    raw.forEach((item: { month: number; events: string }) => {
      if (item.events && item.events.trim()) {
        eventsMap[item.month] = item.events;
      }
    });
  }

  // 表示する月がなければ非表示
  const visibleMonths = monthOrder.filter((m) => eventsMap[m]);
  if (visibleMonths.length === 0) return null;

  return (
    <Section id="events" enTitle="Annual Events" jpTitle="年間行事" alt>
      <div className="relative">
        <StarIllustration className="absolute -top-6 right-4 w-8 h-8 opacity-20 hidden md:block" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {visibleMonths.map((month) => (
            <div
              key={month}
              className="flex gap-3 p-4"
              style={{
                backgroundColor: "var(--bg)",
                borderRadius: "var(--radius-md)",
                borderLeft: `3px solid ${seasonColors[month] || "var(--accent)"}`,
              }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: `${seasonColors[month]}22`,
                  color: seasonColors[month],
                  fontFamily: "var(--font-display)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                }}
              >
                {monthLabels[month]}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "var(--text)",
                  }}
                >
                  {eventsMap[month]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
