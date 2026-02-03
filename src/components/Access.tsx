"use client";

import Section from "./Section";
import { LeafIllustration, StarIllustration, FlowerIllustration, BirdIllustration } from "./Illustrations";
import { SiteData } from "@/lib/useSiteData";

export default function Access({ site }: { site?: SiteData | null }) {
  const contact = site?.contact;
  const address = contact?.address || "神奈川県藤沢市○○1-2-3";
  const postalCode = contact?.postalCode || "〒251-0000";
  const tel = contact?.tel || "0466-00-0000";
  const mapEmbed = contact?.mapEmbed || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.8!2d139.4!3d35.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIxJzAwLjAiTiAxMznCsDI0JzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1";
  const busInfo = contact?.busInfo || "小田急線「藤沢駅」北口より徒歩12分\n駐車場 10台完備";

  return (
    <Section id="access" enTitle="Access" jpTitle="アクセス">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="w-full md:w-[58%]">
          <div className="w-full overflow-hidden" style={{ aspectRatio: "16/10", borderRadius: "var(--radius-sm)", filter: "grayscale(0.8) contrast(1.1)" }}>
            <iframe src={mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="地図" />
          </div>
        </div>
        <div className="w-full md:w-[42%]">
          <div className="space-y-5">
            <div>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.8125rem", color: "var(--accent)", fontWeight: 500, marginBottom: 4, letterSpacing: "0.04em" }}>住所</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.8 }}>{postalCode}<br />{address}</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.8125rem", color: "var(--accent)", fontWeight: 500, marginBottom: 4, letterSpacing: "0.04em" }}>電話番号</p>
              <p style={{ fontSize: "0.9375rem" }}>{tel}</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.8125rem", color: "var(--accent)", fontWeight: 500, marginBottom: 4, letterSpacing: "0.04em" }}>アクセス</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, whiteSpace: "pre-line" }}>{busInfo}</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.8125rem", color: "var(--accent)", fontWeight: 500, marginBottom: 4, letterSpacing: "0.04em" }}>開園時間</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.8 }}>月〜金 8:00〜15:30<br />延長保育 18:30まで</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Footer({ site }: { site?: SiteData | null }) {
  const siteName = site?.name || "こどものいえ ひだまり幼稚園";
  const contact = site?.contact;
  const address = contact?.address || "神奈川県藤沢市○○1-2-3";
  const postalCode = contact?.postalCode || "〒251-0000";
  const tel = contact?.tel || "0466-00-0000";

  return (
    <footer style={{ backgroundColor: "var(--text)" }}>
      <div className="flex items-center justify-center gap-8 py-4 opacity-15" style={{ borderBottom: "1px solid rgba(250,248,245,0.08)" }}>
        <LeafIllustration className="w-6 h-6" />
        <StarIllustration className="w-5 h-5" />
        <FlowerIllustration className="w-5 h-5" />
        <BirdIllustration className="w-7 h-5" />
      </div>
      <div className="mx-auto px-5 md:px-10 py-10" style={{ maxWidth: 1200 }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "var(--bg)", fontWeight: 500, letterSpacing: "0.04em", marginBottom: 4 }}>
              {siteName}
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--text-sub)", lineHeight: 1.8 }}>
              {postalCode} {address}<br />TEL {tel}
            </p>
          </div>
          <nav className="flex gap-6">
            {["園の特色", "一日の流れ", "入園案内", "お知らせ", "アクセス"].map((item) => (
              <a key={item} href={`#${item === "園の特色" ? "about" : item === "一日の流れ" ? "daily" : item === "入園案内" ? "admission" : item === "お知らせ" ? "news" : "access"}`}
                style={{ fontSize: "0.75rem", color: "var(--text-sub)", letterSpacing: "0.04em", transition: "color 0.2s" }} className="hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(250,248,245,0.08)" }}>
          <p className="text-center" style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", color: "var(--text-sub)", letterSpacing: "0.04em" }}>
            © 2026 {siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
