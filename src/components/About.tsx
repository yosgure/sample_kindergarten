"use client";

import Section from "./Section";
import { FlowerIllustration, StarIllustration } from "./Illustrations";
import { SiteData } from "@/lib/useSiteData";

const defaultFeatures = [
  {
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&h=600&fit=crop&q=80",
    title: "モンテッソーリ教育",
    description: "子どもが自分で選び、自分のペースで取り組む「おしごと」の時間。集中する力、最後までやり遂げる力が自然と育ちます。",
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80",
    title: "食育と手づくり給食",
    description: "園の畑で育てた野菜を、子どもたちが自分で調理する食育活動。「いただきます」の意味を体験から学びます。",
  },
  {
    image: "https://images.unsplash.com/photo-1564429238961-bf8e8d170e1e?w=800&h=600&fit=crop&q=80",
    title: "自然とともに育つ",
    description: "広い園庭と四季折々の自然。泥んこ遊び、虫探し、水遊び。五感をめいっぱい使って、いのちの不思議さに触れます。",
  },
];

export default function About({ site }: { site?: SiteData | null }) {
  const rawFeatures = site?.about?.features;
  const features = Array.isArray(rawFeatures) && rawFeatures.filter((f: { title: string }) => f.title).length > 0
    ? rawFeatures.filter((f: { title: string }) => f.title)
    : defaultFeatures;

  return (
    <Section id="about" enTitle="About Us" jpTitle="園の特色">
      {site?.about?.intro && (
        <p className="mb-10 md:mb-14" style={{ fontSize: "0.9375rem", lineHeight: 2, color: "var(--text)", maxWidth: 720 }}>
          {site.about.intro}
        </p>
      )}
      <div className="space-y-16 md:space-y-24">
        {features.map((feature: { title: string; description: string; image: string }, i: number) => (
          <div key={feature.title || i} className={`flex flex-col gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
            <div className="w-full md:w-[58%] relative">
              {feature.image && (
                <img src={feature.image} alt={feature.title} className="w-full object-cover" style={{ aspectRatio: "4/3", borderRadius: "var(--radius-sm)" }} />
              )}
              {i === 0 && <FlowerIllustration className="absolute -bottom-4 -right-4 w-10 h-10 opacity-30 hidden md:block" />}
              {i === 2 && <StarIllustration className="absolute -top-3 -left-3 w-7 h-7 opacity-25 hidden md:block" />}
            </div>
            <div className="w-full md:w-[42%] md:px-4">
              <h3 className="mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.125rem, 2vw, 1.375rem)", fontWeight: 500, color: "var(--text)" }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 2, color: "var(--text)" }}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
