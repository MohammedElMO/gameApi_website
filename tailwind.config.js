/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'x-sm':'196px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      "pop":["Poppins","sans-serif"]
    },
    extend: {
      gridTemplateAreas: {
        'layout': [
          "nav nav",
          'aside main',
        ],
      },
      gridTemplateColumns: {
        'layout': `auto`,
      },
      gridTemplateRows: {
        'layout': `1fr 2fr `,
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ]

}