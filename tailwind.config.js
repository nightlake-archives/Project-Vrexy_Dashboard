/** @type {import('tailwindcss').TailwindConfig} */
const tailwindConfig = {
	content: [
		'./pages/**/*.{html,js}',
		'./components/**/*.{html,js}',	
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

module.exports = tailwindConfig;