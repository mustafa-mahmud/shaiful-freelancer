/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#020617",
          950: "#030712",
        },
        brand: {
          dark: "#0f172a",
          light: "#ffffff",
          card: "rgba(15, 23, 42, 0.55)",
          border: "rgba(148, 163, 184, 0.12)",
        },
        accent: {
          DEFAULT: "#22d3ee",
          dark: "#0891b2",
          soft: "rgba(34, 211, 238, 0.12)",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
