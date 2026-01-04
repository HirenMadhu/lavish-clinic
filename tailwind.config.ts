import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/content/**/*.{mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F6F6A",
        "primary-dark": "#285F5B",
        "primary-soft": "#8FAFA6",

        // Neutrals
        background: "#FFFFFF",
        surface: "#F9FAFB",
        foreground: "#1F2937",
        muted: "#6B7280",
        border: "#E5E7EB",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // Add this line
  ],
};

export default config;
