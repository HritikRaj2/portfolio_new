import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        garamond: ["var(--font-garamond)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        obsidian: "#0B0C10",
        void: "#111111",
        ash: "#1A1A1F",
        ember: "#222228",
        "stone-dark": "#2D2D35",
        parchment: "#E8DFC8",
        "parchment-dim": "#A89E88",
        "parchment-ghost": "#5A5248",
        gold: "#D4AF37",
        "gold-bright": "#F0D060",
        "gold-dim": "#8A7020",
        crimson: "#8A0303",
        "crimson-bright": "#C0392B",
        "winter-blue": "#4A6B82",
        "winter-blue-bright": "#6E9BB5",
      },
      backgroundImage: {
        "gradient-steel":
          "linear-gradient(135deg, #1c1c24 0%, #2a2a35 50%, #1a1a22 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #8A7020 0%, #D4AF37 50%, #8A7020 100%)",
      },
      animation: {
        "torch-flicker": "torchFlicker 3s ease-in-out infinite",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        torchFlicker: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.9" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
