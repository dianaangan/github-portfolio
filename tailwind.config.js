/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Vivid mint/teal accent — the single bold accent color for this design.
        accent: {
          50: '#effefa',
          100: '#c9fdf0',
          200: '#94fbe1',
          300: '#57f0cd',
          400: '#22dbb3',
          500: '#0dbb96',
          600: '#0a9a7c',
          700: '#0c7c65',
          800: '#0f6353',
          900: '#0f5245',
          950: '#052e28',
        },
        // Near-black neutral scale for dark-mode surfaces, distinct from generic slate.
        ink: {
          950: '#04050a',
          900: '#090c13',
          850: '#0d111a',
          800: '#111621',
          700: '#1a212d',
          600: '#262f3d',
          500: '#3a4453',
        },
      },
      maxWidth: {
        content: '46rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
