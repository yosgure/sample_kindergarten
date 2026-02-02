export function LeafIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 38C16 38 4 28 4 16C4 8 9 2 16 2C23 2 28 8 28 16C28 28 16 38 16 38Z"
        stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M16 38V12" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M16 20C12 18 9 14 9 14" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M16 26C20 24 23 20 23 20" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C12 2 14 8 12 12C10 16 12 22 12 22"
        stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M2 12C2 12 8 10 12 12C16 14 22 12 22 12"
        stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloudIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 24C5.5 24 2 21 2 17C2 13.5 4.5 10.5 8 10C8 5 12 2 17 2C21 2 24.5 4.5 25.5 8C26.5 7.5 28 7 29 7C33 7 36 10 36 14C36 14.5 36 15 35.8 15.5C38.5 16 40.5 18.5 40.5 21.5C40.5 23 39 24 37 24H10Z"
        stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlowerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="3" stroke="#3C3C3C" strokeWidth="1.5" />
      <path d="M14 3C14 3 16 8 14 11" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 17C14 17 12 22 14 25" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 14C3 14 8 12 11 14" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 14C17 14 22 16 25 14" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 6C6 6 10 9 11.5 12" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16.5 16C16.5 16 18 21 22 22" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 6C22 6 18 9 16.5 12" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11.5 16C11.5 16 10 21 6 22" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BirdIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 16C2 16 8 8 18 12C28 16 34 8 34 8"
        stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export function HouseIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 16L16 4L28 16V32H4V16Z"
        stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <rect x="12" y="22" width="8" height="10" rx="1"
        stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="16" cy="12" r="2" stroke="#3C3C3C" strokeWidth="1.5" />
    </svg>
  );
}

export function ScrollArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2V26"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M3 20L10 28L17 20"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
