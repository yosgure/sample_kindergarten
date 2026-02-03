"use client";

import { useInView } from "./useInView";

interface SectionProps {
  id: string;
  enTitle: string;
  jpTitle: string;
  alt?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, enTitle, jpTitle, alt = false, children, className = "" }: SectionProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`${className}`}
      style={{
        backgroundColor: alt ? "var(--bg-alt)" : "var(--bg)",
        padding: "clamp(3rem, 8vw, 6rem) 0",
      }}
    >
      <div
        className="mx-auto px-5 md:px-10"
        style={{ maxWidth: 1200, opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(8px)", transition: "opacity 0.7s ease-out, transform 0.7s ease-out" }}
      >
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <p
            className="mb-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              color: "var(--text-sub)",
              letterSpacing: "0.02em",
            }}
          >
            {enTitle}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              color: "var(--text)",
              fontWeight: 500,
            }}
          >
            {jpTitle}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}
