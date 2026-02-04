"use client";

import { useSiteData, useNews } from "@/lib/useSiteData";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoStrip from "@/components/PhotoStrip";
import PrincipalMessage from "@/components/PrincipalMessage";
import DailySchedule from "@/components/DailySchedule";
import AnnualEvents from "@/components/AnnualEvents";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Admission from "@/components/Admission";
import News from "@/components/News";
import InquirySection from "@/components/InquirySection";
import Access, { Footer } from "@/components/Access";
import FAQ from "@/components/FAQ";

export default function Home() {
  const { site, loading } = useSiteData();
  const { news } = useNews(5);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--bg)" }}>
        <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin" style={{ color: "var(--accent)" }} />
      </div>
    );
  }

  // 各セクションの表示判定（管理画面で入力がある場合のみ表示）
  const hasAbout = site?.about?.features?.some((f: { title: string }) => f.title) || site?.about?.intro;
  const hasPrincipal = site?.principalMessage?.name || site?.principalMessage?.message;
  const hasDaily = site?.daily?.schedule?.some((s: { time: string }) => s.time);
  const hasAnnualEvents = site?.annualEvents?.months && Object.values(site.annualEvents.months).some((v: unknown) => typeof v === "string" && (v as string).trim() !== "");
  const hasGallery = site?.gallery?.images?.some((img: { url: string }) => img.url);
  const hasTestimonials = site?.testimonials?.items?.some((t: { text: string }) => t.text);
  const hasAdmission = site?.admission?.text || site?.admission?.fees?.some((f: { item: string }) => f.item);
  const hasNews = news && news.length > 0;
  const hasFAQ = site?.faq?.items?.some((q: { question: string }) => q.question);
  const hasInquiry = site?.contact?.tel || site?.contact?.email;

  return (
    <>
      <Header site={site} />
      <main>
        {/* 1. Hero — 常に表示 */}
        <Hero site={site} />

        {/* 2. 園の特色 — 選ばれる理由 */}
        {hasAbout && <About site={site} />}

        {/* フォトストリップ or ギャラリー */}
        {hasGallery ? <Gallery site={site} /> : <PhotoStrip />}

        {/* 3. 園長メッセージ — 信頼感 */}
        {hasPrincipal && <PrincipalMessage site={site} />}

        {/* 4. 一日の流れ */}
        {hasDaily && <DailySchedule site={site} />}

        {/* 5. 年間行事 */}
        {hasAnnualEvents && <AnnualEvents site={site} />}

        {/* 6. 保護者の声 — 社会的証明 */}
        {hasTestimonials && <Testimonials site={site} />}

        {/* 7. 入園案内 */}
        {hasAdmission && <Admission site={site} />}

        {/* 8. お知らせ */}
        {hasNews && <News site={site} news={news} />}

        {/* 9. よくある質問 */}
        {hasFAQ && <FAQ site={site} />}

        {/* 10. 見学のご案内 — 上品なCTA */}
        {hasInquiry && <InquirySection site={site} />}

        {/* 11. アクセス — 常に表示 */}
        <Access site={site} />
      </main>
      <Footer site={site} />
    </>
  );
}
