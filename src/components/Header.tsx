"use client";

import { useState, useEffect, useMemo } from "react";
import { SiteData } from "@/lib/useSiteData";

export default function Header({ site }: { site?: SiteData | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const siteName = site?.name || "ひだまり幼稚園";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 動的ナビ生成：存在するセクションのみ表示
  const nav = useMemo(() => {
    const items: { label: string; href: string }[] = [];

    const hasAbout = site?.about?.features?.some((f: { title: string }) => f.title) || site?.about?.intro;
    const hasDaily = site?.daily?.schedule?.some((s: { time: string }) => s.time);
    const hasAdmission = site?.admission?.text || site?.admission?.fees?.some((f: { item: string }) => f.item);

    if (hasAbout) items.push({ label: "園の特色", href: "#about" });
    if (hasDaily) items.push({ label: "一日の流れ", href: "#daily" });
    if (hasAdmission) items.push({ label: "入園案内", href: "#admission" });
    items.push({ label: "アクセス", href: "#access" });

    // 見学のご案内はヘッダー右端にさりげなく
    if (site?.contact?.tel || site?.contact?.email) {
      items.push({ label: "見学のご案内", href: "#inquiry" });
    }

    return items;
  }, [site]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]" : ""}`}
      style={{ backgroundColor: scrolled ? "rgba(250,248,245,0.95)" : "transparent" }}
    >
      <div className="mx-auto flex items-center justify-between px-5 md:px-10" style={{ maxWidth: 1200, height: 72 }}>
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg tracking-wide" style={{ fontFamily: "var(--font-heading)", color: scrolled ? "var(--text)" : "#fff", fontWeight: 500, transition: "color 0.3s" }}>
            {siteName}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-sm tracking-wider transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)", color: scrolled ? "var(--text)" : "#fff", fontWeight: 400 }}>
              {item.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setIsOpen(!isOpen)} aria-label="メニュー">
          <span className="block w-6 transition-all duration-300" style={{ height: 1.5, backgroundColor: scrolled ? "var(--text)" : "#fff", transform: isOpen ? "rotate(45deg) translateY(4.5px)" : "none" }} />
          <span className="block w-6 transition-all duration-300" style={{ height: 1.5, backgroundColor: scrolled ? "var(--text)" : "#fff", opacity: isOpen ? 0 : 1 }} />
          <span className="block w-6 transition-all duration-300" style={{ height: 1.5, backgroundColor: scrolled ? "var(--text)" : "#fff", transform: isOpen ? "rotate(-45deg) translateY(-4.5px)" : "none" }} />
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden animate-fade-in" style={{ backgroundColor: "rgba(250,248,245,0.98)", backdropFilter: "blur(12px)" }}>
          <div className="px-5 py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="text-base tracking-wider"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)" }}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
