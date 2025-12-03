import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        primary: "#F1C613",
        "primary-dark": "#D4AF13",
        background: "#F5F7FA",
        "background-alt": "#FFFFFF",
        text: "#646464",
        "text-muted": "#8B8B8B",
        heading: "#333333",
        "nav-dark": "#011826"
      },
      fontFamily: {
        // Main UI font - linked to CSS variables from next/font
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"]
      },
      maxWidth: {
        content: "1280px"
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "full": "9999px"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(15, 20, 26, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
