"use client";
import { LeafIllustration, BirdIllustration, FlowerIllustration, HouseIllustration } from "./Illustrations";

export default function Footer() {
  return (
    <footer className="bg-text text-bg relative overflow-hidden">
      {/* Decorative Illustrations */}
      <div className="absolute top-6 left-[10%] opacity-10">
        <LeafIllustration className="[&_path]:stroke-bg [&_circle]:stroke-bg" />
      </div>
      <div className="absolute top-8 left-[30%] opacity-10 hidden md:block">
        <BirdIllustration className="[&_path]:stroke-bg" />
      </div>
      <div className="absolute top-5 right-[20%] opacity-10 hidden md:block">
        <FlowerIllustration className="[&_path]:stroke-bg [&_circle]:stroke-bg" />
      </div>

      <div className="mx-auto max-w-site px-5 md:px-8 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <HouseIllustration className="w-5 h-6 [&_path]:stroke-bg [&_rect]:stroke-bg [&_circle]:stroke-bg" />
              <span className="font-heading text-bg text-lg font-medium tracking-jp">
                ひだまり幼稚園
              </span>
            </div>
            <p className="text-bg/60 text-sm leading-relaxed-jp tracking-jp max-w-xs">
              モンテッソーリ教育を取り入れ、子どもたちの
              「やりたい」を見守る幼稚園です。
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-bg/40 text-xs tracking-widest mb-4 font-display">MENU</h4>
            <nav className="flex flex-col gap-3">
              {["園の特色", "一日の流れ", "入園案内", "お知らせ", "アクセス"].map(
                (label) => (
                  <a
                    key={label}
                    href={`#${label}`}
                    className="text-bg/70 text-sm tracking-jp hover:text-accent transition-colors duration-300"
                  >
                    {label}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-bg/40 text-xs tracking-widest mb-4 font-display">CONTACT</h4>
            <div className="space-y-3 text-sm tracking-jp">
              <p className="text-bg/70">〒251-0000 神奈川県藤沢市○○1-2-3</p>
              <p>
                <a href="tel:0466-00-0000" className="text-bg/70 hover:text-accent transition-colors">
                  TEL 0466-00-0000
                </a>
              </p>
              <p className="text-bg/70">月〜金 8:30〜18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-bg/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-bg/30 text-xs tracking-wider font-display">
            &copy; 2026 Hidamari Kindergarten. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-bg/30 text-xs tracking-jp hover:text-bg/60 transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-bg/30 text-xs tracking-jp hover:text-bg/60 transition-colors">
              サイトマップ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
