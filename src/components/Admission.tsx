"use client";
import FadeIn from "./FadeIn";
import { CloudIllustration } from "./Illustrations";

const info = [
  { label: "対象年齢", value: "満3歳〜5歳（年少・年中・年長）" },
  { label: "定員", value: "各学年 20名" },
  { label: "保育時間", value: "月〜金 8:30〜14:30（預かり保育 18:00まで）" },
  { label: "給食", value: "週5日 手づくり給食（アレルギー対応可）" },
  { label: "制服", value: "なし（動きやすい服装で登園）" },
  { label: "バス", value: "藤沢市内 送迎バス運行" },
];

const flow = [
  { step: "01", label: "見学申し込み", detail: "お電話またはWebフォームから" },
  { step: "02", label: "園見学", detail: "普段の保育をご覧いただけます" },
  { step: "03", label: "願書提出", detail: "10月1日〜 配布・受付開始" },
  { step: "04", label: "面接", detail: "お子様と保護者様でお越しください" },
  { step: "05", label: "入園決定", detail: "結果を郵送でお知らせします" },
];

export default function Admission() {
  return (
    <section id="admission" className="section-padding bg-bg">
      <div className="section-inner">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 md:mb-20 relative">
            <p className="section-label">Admission</p>
            <h2 className="section-title">入園案内</h2>
            <CloudIllustration className="absolute top-0 right-0 opacity-20 hidden md:block" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info Table */}
          <FadeIn>
            <div>
              <h3 className="font-heading text-text text-lg md:text-xl font-medium mb-6 tracking-jp">
                募集概要
              </h3>
              <div className="space-y-0">
                {info.map((item) => (
                  <div
                    key={item.label}
                    className="flex border-b border-bg-alt py-4 first:border-t"
                  >
                    <span className="w-28 md:w-32 flex-shrink-0 text-text-sub text-sm tracking-jp">
                      {item.label}
                    </span>
                    <span className="text-text text-sm md:text-[15px] tracking-jp leading-relaxed">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Enrollment Flow */}
          <FadeIn delay={150}>
            <div>
              <h3 className="font-heading text-text text-lg md:text-xl font-medium mb-6 tracking-jp">
                入園までの流れ
              </h3>
              <div className="space-y-6">
                {flow.map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="font-display text-accent text-2xl md:text-3xl leading-none mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-heading text-text text-base font-medium tracking-jp">
                        {item.label}
                      </h4>
                      <p className="text-text-sub text-sm tracking-jp mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-block bg-accent text-white text-sm md:text-base font-body tracking-jp px-8 py-3.5 rounded-sm hover:bg-accent/90 transition-colors duration-300"
                >
                  見学のお申し込み
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
