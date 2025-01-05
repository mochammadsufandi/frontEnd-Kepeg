import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbar: "var(--foreground)",
        navbarText: "#CDB61F",
        logoBox: "#2D2E08",
        searchByBox: "#462B2B",
        searchByDivPart: "#C9C192",
        resultButton: "#50A01A",
        searchButton: "#275CC6",
        filterAndSortBox: "#1F0E0E",
        dropdownSelectField: "#B7A11D",
        activeFilterField: "#CDB61F",
        nonActiveFilterField: "#F0E07C",
        whiteText: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
