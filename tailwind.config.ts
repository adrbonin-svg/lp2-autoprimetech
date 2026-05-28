import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0A1628',
          black: '#05080F',
          midnight: '#0A1628',
          deep: '#0F1E36',
          blue: '#0066FF',
          'blue-light': '#3389FF',
          'blue-dark': '#0047B3',
          red: '#E11D48',
          'red-light': '#F43F5E',
          'red-dark': '#BE123C',
          accent: '#00E5FF',
          gold: '#F5C842',
        },
        surface: {
          DEFAULT: '#0A1628',
          1: '#0F1E36',
          2: '#152540',
          3: '#1B2F4F',
        },
        ink: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
          soft: '#CBD5E1',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,102,255,0.25), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(225,29,72,0.18), transparent 60%), linear-gradient(180deg, #05080F 0%, #0A1628 100%)',
        'gradient-cta':
          'linear-gradient(135deg, #E11D48 0%, #BE123C 50%, #0047B3 100%)',
        'gradient-glass':
          'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(0,102,255,0.5)',
        'glow-red': '0 0 60px -10px rgba(225,29,72,0.5)',
        premium:
          '0 20px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34,197,94,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(34,197,94,0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
