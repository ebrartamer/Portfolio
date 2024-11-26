import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // 'media' yerine 'class' kullanıyoruz
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
        volkorn : ['Volkorn', 'sans']
      },
      colors: {
        "dark-card": "#1e1e2e",
        "dark-card-foreground": "#e4e4e7",
        "dark-border": "#2e2e3e",
        "dark-title": "#ffffff",
        "dark-muted-foreground": "#a1a1aa",
        "dark-card-header": "#252537",
        "dark-card-content": "#1c1c2c",
        "dark-card-footer": "#1f1f2f",
       'heading': '#2C3A47', // Ana renk olarak ekledik
        accent : '#6F1E51',
        secondary: '#95A093',
        'primary': {
          DEFAULT: '#2C3A47',
          light: '#3D4B58',
          dark: '#1B2936',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
