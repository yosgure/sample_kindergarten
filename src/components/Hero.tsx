"use client";

import { useEffect, useState } from "react";
import { ScrollArrow, LeafIllustration } from "./Illustrations";
import { SiteData } from "@/lib/useSiteData";

const defaultImages = [
  "https://images.unsplash.com/photo-1587654780131-39272e2a1588?w=1600&h=1000&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&h=1000&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=1600&h=1000&fit=crop&q=80",
];

export default function Hero({ site }: { site?: SiteData | null }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const rawImages = site?.hero?.images;
  const heroImages = Array.isArray(rawImages) && rawImages.length > 0 ? rawImages : defaultImages;
  const tagline = site?.hero?.tagline || "ひとりひとりの\n「やってみたい」を大切に";
  const subtitle = site?.hero?.subtitle || "こどものいえ ひだまり幼稚園は\nモンテッソーリ教育を基盤に、子どもたちの\n自ら学び、育つ力を見守ります。";
  const siteName = site?.subtitle || "Kodomo no Ie";

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 600 }}>
      {heroImages.map((src: string, i: number) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-[1.5s] ease-in-out" style={{ opacity: current === i ? 1 : 0 }}>
          <img src={src} alt="" className="w-full h-full object-cover" style={{ filter: "brightness(0.65)" }} />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center">
        <LeafIllustration className={`w-8 h-8 mb-6 ${loaded ? "animate-fade-in-up delay-200" : "opacity-0"}`} />
        <p className={`mb-3 ${loaded ? "animate-fade-in-up delay-300" : "opacity-0"}`}
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em" }}>
          {siteName}
        </p>
        <h1 className={`${loaded ? "animate-fade-in-up delay-400" : "opacity-0"}`}
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 5vw, 3.25rem)", color: "#fff", fontWeight: 500, lineHeight: 1.4, textShadow: "0 2px 20px rgba(0,0,0,0.15)", letterSpacing: "0.06em", whiteSpace: "pre-line" }}>
          {tagline}
        </h1>
        <p className={`mt-5 ${loaded ? "animate-fade-in-up delay-500" : "opacity-0"}`}
          style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.8125rem, 1.2vw, 0.9375rem)", color: "rgba(255,255,255,0.8)", maxWidth: 480, lineHeight: 1.8, whiteSpace: "pre-line" }}>
          {subtitle}
        </p>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator ${loaded ? "animate-fade-in delay-800" : "opacity-0"}`}>
        <ScrollArrow className="w-5 h-10" />
      </div>
    </section>
  );
}
