import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
      },
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#0052FF', // Vibrant Primary Corporate Blue
          600: '#0B5CFF', // Logo Matched Primary Blue
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A', // Deep Cobalt Corporate Blue
          950: '#0F2F64', // Deep Royal Blue
        },
        navy: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#3B82F6',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#0B5CFF', // Primary Corporate Blue for headlines & text (STRICTLY NO BLACK)
        }
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(11, 92, 255, 0.35)',
        'glow-subtle': '0 10px 30px -10px rgba(11, 92, 255, 0.15)',
        'card-soft': '0 4px 20px -2px rgba(11, 92, 255, 0.05)',
        'card-hover': '0 20px 40px -15px rgba(11, 92, 255, 0.15)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
