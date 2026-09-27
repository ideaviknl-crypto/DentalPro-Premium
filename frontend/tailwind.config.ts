import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1f7ff",
          100: "#dfeeff",
          200: "#bddcff",
          300: "#8ac1ff",
          400: "#4f9af7",
          500: "#2d80eb",
          600: "#1f66c7",
          700: "#1c53a1",
          800: "#1d447d",
          900: "#1d3a68",
        },
        accent: {
          500: "#34d399",
          600: "#10b981",
        },
      },
      boxShadow: {
        soft: "0 18px 55px -20px rgba(29, 76, 123, 0.35)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(57, 160, 255, 0.25), transparent 35%), radial-gradient(circle at bottom right, rgba(52, 211, 153, 0.20), transparent 28%)",
      },
    },
  },
  plugins: [],
};

export default config;
