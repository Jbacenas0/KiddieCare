/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.js' // Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Flowbite as a plugin
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
