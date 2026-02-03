"use client";

import Section from "./Section";
import { SiteData, NewsItem } from "@/lib/useSiteData";

const defaultNews = [
  { date: "2026.01.28", category: "お知らせ", title: "2026年度 入園説明会のご案内" },
  { date: "2026.01.15", category: "イベント", title: "節分の豆まき会を行いました" },
  { date: "2026.01.06", category: "お知らせ", title: "3学期の始業式について" },
  { date: "2025.12.20", category: "イベント", title: "クリスマス発表会のお写真を掲載しました" },
  { date: "2025.12.10", category: "食育", title: "12月の給食だよりを更新しました" },
];

const categoryLabels: Record<string, string> = {
  important: "重要",
  admission: "入園",
  info: "お知らせ",
  event: "イベント",
  daily: "日常",
};

export default function News({ site, news }: { site?: SiteData | null; news?: NewsItem[] }) {
  const hasFirestoreNews = news && news.length > 0;

  return (
    <Section id="news" enTitle="News" jpTitle="お知らせ" alt>
      <div className="mx-auto" style={{ maxWidth: 720 }}>
        <div className="space-y-0">
          {hasFirestoreNews
            ? news.map((item) => (
                <a key={item.id} href="#" className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 group transition-colors"
                  style={{ padding: "1.125rem 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <time className="tabular-nums" style={{ fontFamily: "var(--font-display)", fontSize: "0.8125rem", color: "var(--text-sub)", letterSpacing: "0.02em" }}>
                      {item.date?.replace(/-/g, ".")}
                    </time>
                    <span className="inline-block" style={{ fontSize: "0.6875rem", color: "var(--accent)", border: "1px solid var(--accent)", borderRadius: "var(--radius-sm)", padding: "1px 8px", letterSpacing: "0.04em", fontFamily: "var(--font-heading)" }}>
                      {categoryLabels[item.category || "info"] || "お知らせ"}
                    </span>
                  </div>
                  <p className="group-hover:opacity-60 transition-opacity" style={{ fontSize: "0.9375rem", color: "var(--text)", lineHeight: 1.7 }}>
                    {item.title}
                  </p>
                </a>
              ))
            : defaultNews.map((item, i) => (
                <a key={i} href="#" className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 group transition-colors"
                  style={{ padding: "1.125rem 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <time className="tabular-nums" style={{ fontFamily: "var(--font-display)", fontSize: "0.8125rem", color: "var(--text-sub)", letterSpacing: "0.02em" }}>
                      {item.date}
                    </time>
                    <span className="inline-block" style={{ fontSize: "0.6875rem", color: "var(--accent)", border: "1px solid var(--accent)", borderRadius: "var(--radius-sm)", padding: "1px 8px", letterSpacing: "0.04em", fontFamily: "var(--font-heading)" }}>
                      {item.category}
                    </span>
                  </div>
                  <p className="group-hover:opacity-60 transition-opacity" style={{ fontSize: "0.9375rem", color: "var(--text)", lineHeight: 1.7 }}>
                    {item.title}
                  </p>
                </a>
              ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-block transition-opacity hover:opacity-60"
            style={{ fontSize: "0.8125rem", color: "var(--text-sub)", fontFamily: "var(--font-body)", letterSpacing: "0.06em", borderBottom: "1px solid var(--text-sub)", paddingBottom: 2 }}>
            お知らせ一覧へ →
          </a>
        </div>
      </div>
    </Section>
  );
}
