export function LeafIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="#3C3C3C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 36c0-16 8-24 16-28C28 12 20 16 20 36z" />
      <path d="M20 36c0-16-8-24-16-28C12 12 20 16 20 36z" />
      <path d="M20 14v22" />
    </svg>
  );
}

export function StarIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="#3C3C3C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 4l3.5 8.5L28 14l-6.5 5.5L23 28l-7-4.5L9 28l1.5-8.5L4 14l8.5-1.5z" />
    </svg>
  );
}

export function CloudIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 32"
      fill="none"
      stroke="#3C3C3C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 26c-5 0-8-3.5-8-7.5S7 11 12 11c1-4.5 5-8 10-8 6 0 10.5 4 11 9.5 4.5 0.5 8 3.5 8 7.5s-3.5 6.5-8 6.5z" />
    </svg>
  );
}

export function FlowerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="#3C3C3C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="16" cy="14" r="3" />
      <path d="M16 11c0-4-2-7-2-7s4 3 4 7" />
      <path d="M13.5 12.5c-3.5-2-7-1.5-7-1.5s4.5 1 6.5 4" />
      <path d="M13.5 15.5c-3.5 2-5 5.5-5 5.5s2.5-3 6-3.5" />
      <path d="M18.5 15.5c3.5 2 5 5.5 5 5.5s-2.5-3-6-3.5" />
      <path d="M18.5 12.5c3.5-2 7-1.5 7-1.5s-4.5 1-6.5 4" />
      <path d="M16 17v11" />
    </svg>
  );
}

export function BirdIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 28"
      fill="none"
      stroke="#3C3C3C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 18c4-8 12-12 20-14-4 4-6 8-4 14" />
      <path d="M24 4c4-1 8 0 12 2-4 1-6 3-8 6" />
      <circle cx="28" cy="8" r="1" fill="#3C3C3C" />
    </svg>
  );
}

export function HouseIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="#3C3C3C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 20L20 8l14 12" />
      <path d="M10 18v16h20V18" />
      <path d="M16 34v-10h8v10" />
      <path d="M14 24h4v3h-4z" />
    </svg>
  );
}

export function ScrollArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 40"
      fill="none"
      stroke="#FAF8F5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4v28" />
      <path d="M6 26l6 8 6-8" />
    </svg>
  );
}
