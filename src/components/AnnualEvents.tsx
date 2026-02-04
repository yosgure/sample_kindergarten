"use client";

import Section from "./Section";
import { StarIllustration } from "./Illustrations";
import { SiteData } from "@/lib/useSiteData";

const monthLabels = [
  "4月", "5月", "6月", "7月", "8月", "9月",
  "10月", "11月", "12月", "1月", "2月", "3月",
];

const defaultEvents: Record<string, string> = {
  "4": "入園式、始業式、保護者会",
  "5": "こどもの日の集い、親子遠足、健康診断",
  "6": "保育参観、プール開き、歯科検診",
  "7": "七夕まつり、お泊まり保育、終業式",
  "8": "夏季保育、夏まつり",
  "9": "始業式、防災訓練、敬老の日の集い",
  "10": "運動会、秋の遠足、芋掘り",
  "11": "作品展、七五三、保育参観",
  "12": "クリスマス会、おもちつき、終業式",
  "1": "始業式、お正月あそび、マラソン大会",
  "2": "豆まき、生活発表会、保護者会",
  "3": "ひなまつり、お別れ遠足、卒園式",
};

const seasonColors: Record<number, string> = {
  0: "#F9A8B6",  // 4月 春
  1: "#7DC87D",  // 5月 春
  2: "#7ABFDB",  // 6月 梅雨
  3: "#FFD36E",  // 7月 夏
  4: "#FF9E4A",  // 8月 夏
  5: "#D4A76A",  // 9月 秋
  6: "#E8834A",  // 10月 秋
  7: "#C9956B",  // 11月 秋
  8: "#7EADD4",  // 12月 冬
  9: "#A3C6E0",  // 1月 冬
  10: "#F4B3C2", // 2月 冬
  11: "#FABE7A", // 3月 春
};

export default function AnnualEvents({ site }: { site?: SiteData | null }) {
  const rawEvents = site?.annualEvents?.months;

  // Firestoreからデータがあればそれを使用、なければデフォルト
  const hasFirestoreData =
    rawEvents &&
    typeof rawEvents === "object" &&
    Object.values(rawEvents).some((v: unknown) => typeof v === "string" && v.trim() !== "");

  const events = hasFirestoreData ? rawEvents : defaultEvents;

  // 月順: 4,5,6,...,12,1,2,3
  const monthKeys = ["4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3"];

  return (
    <Section id="events" enTitle="Annual Events" jpTitle="年間行事" alt>
      <div className="relative">
        <StarIllustration className="absolute -top-6 right-4 w-8 h-8 opacity-20 hidden md:block" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {monthKeys.map((key, i) => {
            const eventText = (events as Record<string, string>)[key] || "";
            if (!eventText) return null;

            return (
              <div
                key={key}
                className="flex gap-3 p-4"
                style={{
                  backgroundColor: "var(--bg)",
                  borderRadius: "var(--radius-md)",
                  borderLeft: `3px solid ${seasonColors[i] || "var(--accent)"}`,
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: `${seasonColors[i]}22`,
                    color: seasonColors[i],
                    fontFamily: "var(--font-display)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                  }}
                >
                  {monthLabels[i]}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: "var(--text)",
                    }}
                  >
                    {eventText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
