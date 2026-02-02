"use client";
import FadeIn from "./FadeIn";
import { StarIllustration } from "./Illustrations";

const schedule = [
  { time: "8:30", label: "登園", description: "おうちの方に見送られて、笑顔で「おはようございます」" },
  { time: "9:00", label: "お仕事の時間", description: "モンテッソーリ教具を自分で選び、集中して取り組みます" },
  { time: "10:30", label: "外遊び", description: "園庭や近くの公園で、体を使ってのびのびと" },
  { time: "11:30", label: "お昼ごはん", description: "手づくり給食をみんなで「いただきます」" },
  { time: "13:00", label: "お昼寝・静かな時間", description: "年少さんはお昼寝、年長さんは絵本や制作の時間" },
  { time: "14:30", label: "おやつ・帰りの会", description: "季節のおやつを食べて、今日の振り返り" },
  { time: "15:00", label: "降園", description: "「また明日ね」のあいさつでさようなら" },
];

export default function Daily() {
  return (
    <section id="daily" className="section-padding bg-bg-alt">
      <div className="section-inner">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 md:mb-20">
            <p className="section-label">Daily Life</p>
            <h2 className="section-title">一日の流れ</h2>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="max-w-content mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[52px] md:left-[68px] top-4 bottom-4 w-[1px] bg-accent/30" />

          <div className="space-y-8 md:space-y-10">
            {schedule.map((item, i) => (
              <FadeIn key={item.time} delay={i * 80}>
                <div className="flex gap-4 md:gap-6 items-start relative">
                  {/* Time */}
                  <div className="w-[40px] md:w-[52px] flex-shrink-0 text-right">
                    <span className="font-display text-accent text-lg md:text-xl">
                      {item.time}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-2">
                    <div className="w-3 h-3 rounded-full bg-accent border-2 border-bg-alt" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h3 className="font-heading text-text text-base md:text-lg font-medium tracking-jp mb-1">
                      {item.label}
                    </h3>
                    <p className="text-text-sub text-sm md:text-[15px] leading-relaxed tracking-jp">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Decorative */}
          <StarIllustration className="absolute -right-8 top-12 opacity-20 hidden md:block" />
        </div>
      </div>
    </section>
  );
}
