/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        saasstartertheme: {
          "primary": "#693FF3",
          "primary-content": "#F8F9FA",
          "neutral-content": "#F8F9FA",
          "secondary": "#693FF3",
          "accent": "#693FF3",
          "neutral": "#693FF3",
          "base-content": "#161817",
          "base-100": "#F8F9FA",
        },
      }
    ],
  }
}

