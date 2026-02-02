"use client";
import FadeIn from "./FadeIn";

export default function Access() {
  return (
    <section id="access" className="section-padding bg-bg">
      <div className="section-inner">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 md:mb-20">
            <p className="section-label">Access</p>
            <h2 className="section-title">アクセス</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Info */}
          <FadeIn>
            <div className="lg:col-span-5">
              <h3 className="font-heading text-text text-xl font-medium tracking-jp mb-6">
                こどものいえ
                <br />
                ひだまり幼稚園
              </h3>

              <div className="space-y-4 text-sm md:text-[15px] tracking-jp leading-relaxed-jp">
                <div>
                  <span className="text-text-sub block mb-1">住所</span>
                  <p className="text-text">〒251-0000 神奈川県藤沢市○○1-2-3</p>
                </div>
                <div>
                  <span className="text-text-sub block mb-1">電話番号</span>
                  <p className="text-text">
                    <a href="tel:0466-00-0000" className="hover:text-accent transition-colors">
                      0466-00-0000
                    </a>
                  </p>
                </div>
                <div>
                  <span className="text-text-sub block mb-1">開園時間</span>
                  <p className="text-text">月〜金 8:30〜14:30（預かり保育 18:00まで）</p>
                </div>
                <div>
                  <span className="text-text-sub block mb-1">アクセス</span>
                  <p className="text-text">
                    JR藤沢駅 北口より徒歩12分
                    <br />
                    小田急藤沢本町駅より徒歩8分
                    <br />
                    駐車場 10台完備
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={150}>
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-sm" style={{ filter: "grayscale(100%) contrast(1.1)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.123456789!2d139.48!3d35.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIwJzI0LjAiTiAxMznCsDI4JzQ4LjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ひだまり幼稚園 地図"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
