/** @type {import('tailwindcss').TailwindConfig} */
const tailwindConfig = {
	content: [
		'./pages/**/*.{html,js,tsx}',
		'./components/**/*.{html,js,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

module.exports = tailwindConfig;