"use client";
import { useEffect, useState } from "react";
import { ScrollArrow } from "./Illustrations";

const heroImages = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1600&q=80",
  "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=1600&q=80",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Images with Fade */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: currentImage === i ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-5 md:px-8">
        <div className="max-w-site mx-auto w-full">
          <p
            className={`font-handwrite text-white/90 text-sm md:text-base tracking-wider mb-3 transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
          >
            こどものいえ
          </p>
          <h1
            className={`font-heading text-white text-3xl md:text-5xl lg:text-6xl font-medium leading-heading tracking-jp transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}
          >
            ひだまりのなかで、
            <br />
            自分を見つける。
          </h1>
          <p
            className={`font-body text-white/85 text-sm md:text-base mt-5 max-w-md tracking-jp leading-relaxed-jp transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.3)" }}
          >
            モンテッソーリ教育を取り入れ、
            <br className="md:hidden" />
            子どもの「やりたい」を見守ります。
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-display text-white/60 text-xs tracking-widest">scroll</span>
        <div className="animate-bounce">
          <ScrollArrow className="text-white/60 w-4 h-6" />
        </div>
      </div>
    </section>
  );
}
