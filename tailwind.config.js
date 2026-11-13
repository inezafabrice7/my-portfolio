/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#08080D',
          elevated: '#12111B',
          soft: '#171624',
        },
        accent: {
          DEFAULT: '#9B5CFF',
          light: '#C4A1FF',
          cyan: '#54D9FF',
        },
        muted: {
          DEFAULT: '#A7A6B4',
          dark: '#7A7988',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(155,92,255,0.25), 0 20px 60px rgba(155,92,255,0.15)',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
