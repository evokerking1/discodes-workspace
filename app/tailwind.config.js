/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
		themes: ["dark", "pastel", "winter", "dracula", "retro", "black", "luxury", "night", "business"],
	},
}

