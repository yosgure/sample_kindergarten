"use client";

import Section from "./Section";
import { CloudIllustration } from "./Illustrations";
import { SiteData } from "@/lib/useSiteData";

const defaultSchedule = [
  { time: "8:00", activity: "登園・自由あそび" },
  { time: "9:30", activity: "モンテッソーリのおしごと" },
  { time: "11:30", activity: "お外あそび・散歩" },
  { time: "12:00", activity: "手づくり給食" },
  { time: "13:00", activity: "おひるね・静かな時間" },
  { time: "15:00", activity: "おやつ・帰りの会" },
  { time: "15:30", activity: "降園・延長保育" },
];

export default function DailySchedule({ site }: { site?: SiteData | null }) {
  const rawSchedule = site?.daily?.schedule;
  const schedule = Array.isArray(rawSchedule) && rawSchedule.length > 0 ? rawSchedule : defaultSchedule;
  const extendedCare = site?.daily?.extendedCare;

  return (
    <Section id="daily" enTitle="Daily Life" jpTitle="一日の流れ" alt>
      <div className="relative mx-auto" style={{ maxWidth: 680 }}>
        <CloudIllustration className="absolute -top-8 right-0 w-16 h-9 opacity-20 hidden md:block" />
        <div className="relative">
          <div className="absolute hidden md:block" style={{ left: 52, top: 8, bottom: 8, width: 1, backgroundColor: "var(--accent-light)" }} />
          <div className="space-y-0">
            {schedule.map((item: { time: string; activity: string }) => (
              <div key={item.time} className="flex items-start gap-4 md:gap-8 group" style={{ padding: "1rem 0" }}>
                <div className="flex-shrink-0 w-14 text-right pt-0.5">
                  <span className="tabular-nums" style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", color: "var(--accent)", letterSpacing: "0.02em" }}>
                    {item.time}
                  </span>
                </div>
                <div className="hidden md:flex flex-shrink-0 items-center justify-center" style={{ width: 10, paddingTop: 6 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "var(--accent)", transition: "transform 0.2s" }} />
                </div>
                <div className="flex-1 pb-2">
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 500, color: "var(--text)", marginBottom: 2 }}>
                    {item.activity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {extendedCare && (
          <div className="mt-6 p-4" style={{ backgroundColor: "var(--bg)", borderRadius: "var(--radius-md)" }}>
            <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 500, color: "var(--accent)", marginBottom: 4 }}>預かり保育</p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text)" }}>{extendedCare}</p>
          </div>
        )}
      </div>
    </Section>
  );
}
