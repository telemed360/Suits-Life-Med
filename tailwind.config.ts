import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F4F8EA",
          100: "#E6EFCF",
          200: "#CEDFA3",
          300: "#B0CA70",
          400: "#93B147",
          500: "#7C9634",
          600: "#637A28",
          700: "#4E6022",
          800: "#404E1F",
          900: "#35411D",
          950: "#1B230C",
        },
        navy: {
          50: "#F3F6ED",
          100: "#E4E9D7",
          200: "#C8D2B2",
          300: "#A5B386",
          400: "#80905D",
          500: "#627042",
          600: "#4C5833",
          700: "#3A4428",
          800: "#2C341F",
          900: "#202718",
          950: "#12170C",
        },
        /* Dourado da logo: usado em CTAs e destaques. */
        accent: {
          50: "#FDF9EB",
          100: "#FAEFCB",
          200: "#F5DE97",
          300: "#EECB63",
          400: "#E3B744",
          500: "#D0A12F",
          600: "#9C751C",
          700: "#7C5D18",
          800: "#614917",
          900: "#4C3A15",
          950: "#2B200A",
        },
        ink: {
          DEFAULT: "#1A1F0E",
          soft: "#444B37",
          muted: "#737B65",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,31,14,.04), 0 8px 24px -12px rgba(26,31,14,.14)",
        card: "0 2px 4px rgba(26,31,14,.04), 0 18px 40px -20px rgba(26,31,14,.22)",
        lift: "0 8px 12px rgba(26,31,14,.05), 0 32px 60px -28px rgba(78,96,34,.42)",
        glow: "0 0 0 1px rgba(208,161,47,.18), 0 22px 60px -24px rgba(208,161,47,.55)",
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
