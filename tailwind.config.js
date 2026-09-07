/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        od: {
          bg: '#282c34',
          surface: '#2f3540',
          purple: '#a371f7',
          cyan: '#0c969c',
          orange: '#e8751a',
          green: '#3fb950',
          red: '#e06c75',
          blue: '#61afef',
          fg: '#abb2bf',
          comment: '#5c6370',
        },
        mac: {
          bg: '#F5F5F7',
          surface: '#FFFFFF',
          border: '#E5E5EA',
          'border-dark': '#D1D1D6',
          text: '#1D1D1F',
          'text-secondary': '#6E6E73',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'mac': '0 1px 3px rgba(0,0,0,0.06), 0 6px 16px rgba(0,0,0,0.04)',
        'mac-lg': '0 2px 8px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.06)',
        'mac-xl': '0 4px 12px rgba(0,0,0,0.03), 0 20px 60px rgba(0,0,0,0.08)',
        'glow-orange': '0 0 20px rgba(232,117,26,0.15)',
        'glow-purple': '0 0 20px rgba(163,113,247,0.15)',
        'glow-cyan': '0 0 20px rgba(12,150,156,0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        blink: 'blink 1.1s step-end infinite',
        'ring-spin': 'ringSpin 8s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        ringSpin: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
        pulseGlow: { '0%, 100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
}
