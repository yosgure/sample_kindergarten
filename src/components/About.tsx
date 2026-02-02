"use client";
import FadeIn from "./FadeIn";
import { LeafIllustration, FlowerIllustration } from "./Illustrations";

const features = [
  {
    title: "子ども主体の環境",
    description:
      "教室のすべてが子どもの手の届く高さに。自分で選び、自分で始め、自分で片づける。その一連の流れが「生きる力」を育みます。",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=800&q=80",
  },
  {
    title: "食を通じた学び",
    description:
      "園の畑で育てた野菜を収穫し、自分たちで調理する。「食べる・つくる・育てる」が日常にある暮らしの中で、五感を使った学びが広がります。",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&q=80",
  },
  {
    title: "自然と遊ぶ毎日",
    description:
      "園庭の大きな木、小さな虫、季節の花。自然の中で遊び、発見し、不思議に思う。好奇心を制限しない環境がここにあります。",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg">
      <div className="section-inner">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 md:mb-20">
            <p className="section-label">About Us</p>
            <h2 className="section-title">園の特色</h2>
          </div>
        </FadeIn>

        {/* Intro Text */}
        <FadeIn delay={100}>
          <div className="max-w-content mb-16 md:mb-24">
            <p className="text-text text-base md:text-lg leading-relaxed-jp tracking-jp">
              ひだまり幼稚園は、マリア・モンテッソーリの教育理念に基づき、
              子どもたち一人ひとりの「やりたい」という気持ちに寄り添います。
              大人が教え込むのではなく、環境を整え、見守ることで、
              子どもが自ら学び、成長していく力を信じています。
            </p>
          </div>
        </FadeIn>

        {/* Feature Grid - Asymmetric */}
        <div className="space-y-16 md:space-y-28">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 100}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Photo - 7 columns */}
                <div
                  className={`md:col-span-7 ${
                    i % 2 === 1 ? "md:col-start-6 md:order-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-sm">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text - 5 columns */}
                <div
                  className={`md:col-span-5 ${
                    i % 2 === 1 ? "md:col-start-1 md:row-start-1 md:order-1" : ""
                  }`}
                >
                  <div className="relative">
                    {i === 0 && (
                      <LeafIllustration className="absolute -top-8 -left-4 opacity-30" />
                    )}
                    {i === 2 && (
                      <FlowerIllustration className="absolute -top-6 -right-2 opacity-30" />
                    )}
                    <h3 className="font-heading text-text text-xl md:text-2xl font-medium mb-4 tracking-jp">
                      {feature.title}
                    </h3>
                    <p className="text-text text-sm md:text-base leading-relaxed-jp tracking-jp">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
