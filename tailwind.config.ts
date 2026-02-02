import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FAF8F5",
          alt: "#F2EDE6",
        },
        text: {
          DEFAULT: "#3C3C3C",
          sub: "#8B8B8B",
        },
        accent: {
          DEFAULT: "#E8A598",
          light: "#F2D0C9",
        },
        "green-muted": "#B8C9A3",
        "brown-warm": "#A0876C",
        "blue-dusty": "#94A7B5",
        "yellow-soft": "#E8D5A3",
      },
      fontFamily: {
        heading: ['"Zen Maru Gothic"', 'sans-serif'],
        body: ['"Zen Kaku Gothic New"', 'sans-serif'],
        display: ['"DM Serif Display"', 'serif'],
        handwrite: ['"Yusei Magic"', 'cursive'],
      },
      maxWidth: {
        'site': '1200px',
        'content': '720px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
      },
      letterSpacing: {
        'jp': '0.04em',
      },
      lineHeight: {
        'relaxed-jp': '1.9',
        'heading': '1.4',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
