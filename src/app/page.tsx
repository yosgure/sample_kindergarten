"use client";

import { useSiteData, useNews } from "@/lib/useSiteData";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoStrip from "@/components/PhotoStrip";
import PrincipalMessage from "@/components/PrincipalMessage";
import Education from "@/components/Education";
import History from "@/components/History";
import Classes from "@/components/Classes";
import DailySchedule from "@/components/DailySchedule";
import AnnualEvents from "@/components/AnnualEvents";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Safety from "@/components/Safety";
import Testimonials from "@/components/Testimonials";
import Admission from "@/components/Admission";
import PreschoolClass from "@/components/PreschoolClass";
import News from "@/components/News";
import FAQ from "@/components/FAQ";
import InquirySection from "@/components/InquirySection";
import Access, { Footer } from "@/components/Access";

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

  // ── 表示判定（入力がある場合のみ表示） ──
  const hasAbout = site?.about?.features?.some((f: { title: string }) => f.title) || site?.about?.intro;
  const hasPrincipal = site?.principal?.name || site?.principal?.greeting || site?.principalMessage?.name || site?.principalMessage?.message;
  const hasEducation = site?.education?.philosophy || site?.education?.curriculum || site?.education?.methods?.some((m: { title: string }) => m.title);
  const hasHistory = site?.history?.founded || site?.history?.body || site?.history?.milestones?.some((m: { year: string }) => m.year);
  const hasClasses = Array.isArray(site?.classes) && site.classes.some((c: { description?: string; capacity?: string }) => c.description?.trim() || c.capacity?.trim());
  const hasDaily = site?.daily?.schedule?.some((s: { time: string }) => s.time);
  const hasAnnualEvents = Array.isArray(site?.annualEvents) && site.annualEvents.some((e: { events: string }) => e.events && e.events.trim());
  const hasFacilities = Array.isArray(site?.facilities) && site.facilities.some((f: { name: string }) => f.name && f.name.trim());
  const hasGallery = site?.gallery?.photos?.some((p: { src: string }) => p.src) || site?.gallery?.images?.some((img: { url: string }) => img.url);
  const hasSafety = site?.safety?.intro || site?.safety?.measures?.some((m: { title: string }) => m.title);
  const hasTestimonials = site?.testimonials?.items?.some((t: { text: string }) => t.text);
  const hasAdmission = site?.admission?.text || site?.admission?.fees?.some((f: { item: string }) => f.item);
  const hasPreschool = site?.preschoolClass?.name || site?.preschoolClass?.description;
  const hasNews = news && news.length > 0;
  const hasFAQ = Array.isArray(site?.faq) ? site.faq.some((q: { question: string }) => q.question) : site?.faq?.items?.some((q: { question: string }) => q.question);
  const hasInquiry = site?.contact?.tel || site?.contact?.email;

  return (
    <>
      <Header site={site} />
      <main>
        {/* ── 第一印象 ── */}
        <Hero site={site} />

        {/* ── 園を知る ── */}
        {hasAbout && <About site={site} />}
        {hasGallery ? <Gallery site={site} /> : <PhotoStrip />}
        {hasPrincipal && <PrincipalMessage site={site} />}
        {hasEducation && <Education site={site} />}
        {hasHistory && <History site={site} />}

        {/* ── 園生活 ── */}
        {hasClasses && <Classes site={site} />}
        {hasDaily && <DailySchedule site={site} />}
        {hasAnnualEvents && <AnnualEvents site={site} />}
        {hasFacilities && <Facilities site={site} />}
        {hasSafety && <Safety site={site} />}

        {/* ── 信頼・入園 ── */}
        {hasTestimonials && <Testimonials site={site} />}
        {hasAdmission && <Admission site={site} />}
        {hasPreschool && <PreschoolClass site={site} />}
        {hasNews && <News site={site} news={news} />}
        {hasFAQ && <FAQ site={site} />}

        {/* ── お問い合わせ ── */}
        {hasInquiry && <InquirySection site={site} />}
        <Access site={site} />
      </main>
      <Footer site={site} />
    </>
  );
}
