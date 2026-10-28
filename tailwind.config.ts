import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--bg-cream)",
        paper: "var(--bg-paper)",
        blush: {
          DEFAULT: "var(--bg-blush)",
          deep: "var(--bg-blush-deep)",
        },
        ink: {
          900: "var(--ink-900)",
          700: "var(--ink-700)",
          500: "var(--ink-500)",
        },
        rose: {
          accent: "var(--accent-rose)",
          berry: "var(--accent-berry)",
        },
        sage: "var(--accent-sage)",
        butter: "var(--accent-butter)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        editorial: "0 12px 32px -8px rgba(74, 63, 66, 0.08), 0 4px 12px -2px rgba(74, 63, 66, 0.04)",
        polaroid: "0 14px 28px -6px rgba(35, 31, 32, 0.12), 0 4px 10px -2px rgba(35, 31, 32, 0.06)",
        sticker: "0 6px 16px -2px rgba(168, 56, 91, 0.15)",
        ink: "4px 4px 0px #231F20",
        "ink-sm": "2px 2px 0px #231F20",
        "rose-offset": "5px 5px 0px #D96B8A",
      },
    },
  },
  plugins: [],
};

export default config;

