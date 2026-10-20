/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070a0f",
          900: "#0a0e14",
          850: "#0d1219",
          800: "#111821",
          700: "#1a2230",
          600: "#26303f",
        },
        teal: {
          glow: "#2dd4bf",
          deep: "#0d9488",
        },
        violet: {
          glow: "#8b5cf6",
          deep: "#6d28d9",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(45, 212, 191, 0.45)",
        violetglow: "0 0 40px -10px rgba(139, 92, 246, 0.45)",
        card: "0 20px 60px -20px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
