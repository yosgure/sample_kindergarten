"use client";

import { useSiteData, useNews } from "@/lib/useSiteData";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoStrip from "@/components/PhotoStrip";
import DailySchedule from "@/components/DailySchedule";
import Admission from "@/components/Admission";
import News from "@/components/News";
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

  return (
    <>
      <Header site={site} />
      <main>
        <Hero site={site} />
        <About site={site} />
        <PhotoStrip />
        <DailySchedule site={site} />
        <Admission site={site} />
        <News site={site} news={news} />
        <Access site={site} />
      </main>
      <Footer site={site} />
    </>
  );
}
