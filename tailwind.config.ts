import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./functions/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0a5b34",
          dark: "#073f28",
          soft: "#e8f2ec",
          gold: "#b98b32",
          paper: "#fffdf8",
          ink: "#1d2520",
          muted: "#5f6b64",
          line: "#e6e3dc",
        },
      },
      fontFamily: {
        sans: ['"Yu Gothic"', '"Hiragino Kaku Gothic ProN"', "Meiryo", "sans-serif"],
        serif: ['"Yu Mincho"', '"Hiragino Mincho ProN"', "serif"],
      },
      boxShadow: {
        soft: "0 16px 44px rgba(35, 45, 39, .09)",
      },
      borderRadius: {
        card: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
