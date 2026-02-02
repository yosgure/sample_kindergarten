"use client";
import FadeIn from "./FadeIn";

const news = [
  {
    date: "2026.02.01",
    category: "お知らせ",
    title: "令和8年度 園児募集のご案内",
  },
  {
    date: "2026.01.20",
    category: "イベント",
    title: "節分の豆まき会を行います",
  },
  {
    date: "2026.01.10",
    category: "お知らせ",
    title: "1月の園見学日程が決まりました",
  },
  {
    date: "2025.12.20",
    category: "報告",
    title: "クリスマス会の様子をお届けします",
  },
  {
    date: "2025.12.05",
    category: "お知らせ",
    title: "年末年始の休園日について",
  },
];

export default function News() {
  return (
    <section id="news" className="section-padding bg-bg-alt">
      <div className="section-inner">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 md:mb-16">
            <p className="section-label">News</p>
            <h2 className="section-title">お知らせ</h2>
          </div>
        </FadeIn>

        {/* News List */}
        <div className="max-w-content">
          {news.map((item, i) => (
            <FadeIn key={item.title} delay={i * 60}>
              <a
                href="#"
                className="group flex flex-col md:flex-row md:items-center gap-1 md:gap-6 py-5 border-b border-text/5 hover:bg-bg/50 transition-colors duration-300 -mx-3 px-3 rounded-sm"
              >
                <div className="flex items-center gap-3 flex-shrink-0">
                  <time className="font-display text-text-sub text-sm tracking-wider">
                    {item.date}
                  </time>
                  <span className="text-[11px] text-accent border border-accent/30 px-2 py-0.5 rounded-sm tracking-jp">
                    {item.category}
                  </span>
                </div>
                <p className="text-text text-sm md:text-[15px] tracking-jp group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* More Link */}
        <FadeIn delay={300}>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-text-sub text-sm tracking-jp hover:text-accent transition-colors duration-300 group"
            >
              <span>お知らせ一覧</span>
              <span className="inline-block w-6 h-[1px] bg-text-sub group-hover:bg-accent group-hover:w-10 transition-all duration-300" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
