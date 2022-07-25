module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 15px 15px rgba(0, 0, 0, 0.5)',
      }
    }
  },
  plugins: [],
}