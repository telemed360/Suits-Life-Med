import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F6F6EC",
          100: "#ECEDD5",
          200: "#D8DAAB",
          300: "#BBBE78",
          400: "#9A9D4A",
          500: "#777832",
          600: "#5C5D21",
          700: "#4C4E1F",
          800: "#3D3F17",
          900: "#2F3112",
          950: "#1A1B09",
        },
        navy: {
          50: "#F4F4EE",
          100: "#E5E6D8",
          200: "#C9CBB0",
          300: "#A6A984",
          400: "#80835C",
          500: "#5F6240",
          600: "#4A4C30",
          700: "#393B25",
          800: "#2B2D1C",
          900: "#1F2014",
          950: "#12130B",
        },
        /* Dourado da logo: usado em CTAs e destaques. */
        accent: {
          50: "#FBF7EC",
          100: "#F6EDD1",
          200: "#EFD9A3",
          300: "#E5C478",
          400: "#D6AE58",
          500: "#BC943C",
          600: "#987229",
          700: "#7A5A21",
          800: "#5F461C",
          900: "#4A3717",
          950: "#2A1E0B",
        },
        ink: {
          DEFAULT: "#1C1D0F",
          soft: "#46483A",
          muted: "#75776A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28,29,15,.04), 0 8px 24px -12px rgba(28,29,15,.14)",
        card: "0 2px 4px rgba(28,29,15,.04), 0 18px 40px -20px rgba(28,29,15,.22)",
        lift: "0 8px 12px rgba(28,29,15,.05), 0 32px 60px -28px rgba(76,78,31,.42)",
        glow: "0 0 0 1px rgba(188,148,60,.18), 0 22px 60px -24px rgba(188,148,60,.55)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(.85)", opacity: "0.7" },
          "80%,100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseRing: "pulseRing 2.6s cubic-bezier(.24,.8,.4,1) infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
