"use client";
import FadeIn from "./FadeIn";

const photos = [
  { src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80", alt: "園での制作活動" },
  { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80", alt: "自然の中での遊び" },
  { src: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&q=80", alt: "モンテッソーリ教具" },
  { src: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80", alt: "食育の時間" },
];

export default function Gallery() {
  return (
    <section className="py-4 md:py-8 bg-bg overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {photos.map((photo, i) => (
          <FadeIn key={photo.src} delay={i * 120}>
            <div className="overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-square object-cover hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
