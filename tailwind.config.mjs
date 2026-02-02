/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'rosa-primario': '#FFB6D9',
        'rosa-oscuro': '#FF69B4',
        'rojo': '#DC143C',
        'dorado': '#FFD700',
        'fondo-claro': '#FFF5F7',
        'rosa-suave': '#FFE4EC',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'cursive': ['Dancing Script', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'fall': 'fall 10s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'wiggle': 'wiggle 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.15)' },
        },
        fall: {
          '0%': {
            transform: 'translateY(-10vh) rotate(0deg)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(110vh) rotate(720deg)',
            opacity: '0.3'
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(220, 20, 60, 0.4)',
            transform: 'scale(1)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(220, 20, 60, 0.8)',
            transform: 'scale(1.05)'
          },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
      },
      backgroundImage: {
        'gradient-valentine': 'linear-gradient(180deg, #FFB6D9 0%, #FFF5F7 50%, #FFFFFF 100%)',
        'gradient-rosa': 'linear-gradient(135deg, #FFE4EC 0%, #FFB6D9 100%)',
      },
    },
  },
  plugins: [],
};
