/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilitar el modo oscuro basado en una clase
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a202c', // Color de fondo oscuro
        light: '#ffffff', // Color de fondo claro
      },
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        scaleUp: 'scaleUp 0.3s ease-in-out forwards',
        scaleDown: 'scaleDown 0.3s ease-in-out forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
