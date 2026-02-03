"use client";

import { useInView } from "./useInView";

const photos = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop&q=75",
  "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=400&fit=crop&q=75",
  "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=400&fit=crop&q=75",
  "https://images.unsplash.com/photo-1587654780131-39272e2a1588?w=400&h=400&fit=crop&q=75",
  "https://images.unsplash.com/photo-1564429238961-bf8e8d170e1e?w=400&h=400&fit=crop&q=75",
];

export default function PhotoStrip() {
  const { ref, isInView } = useInView(0.05);

  return (
    <div
      ref={ref}
      className="overflow-hidden"
      style={{
        backgroundColor: "var(--bg)",
        padding: "clamp(1rem, 3vw, 2rem) 0",
      }}
    >
      <div className="flex gap-2 md:gap-3">
        {photos.map((src, i) => (
          <div
            key={i}
            className="flex-1 min-w-0"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full object-cover"
              style={{
                aspectRatio: "1/1",
                borderRadius: "var(--radius-sm)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
