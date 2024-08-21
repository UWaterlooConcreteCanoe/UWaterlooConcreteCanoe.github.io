/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  prefix: "tw-",
  important: true,
  corePlugins: {
      preflight: false,
  }
}

