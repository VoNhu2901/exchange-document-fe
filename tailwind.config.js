/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			primary: '#4986FC',
			white: '#fff',
			secondary: '#fD8900',
			'blue-dark': '#316BFF',
			'gray-light': '#d3dce6',
			'gray-dark': '#777',
			red: '#d0021b',
			black: '#000',
			green: '#589f39',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	// theme: {
	// 	extend: {},
	// },
	plugins: [],
	corePlugins: {
		preflight: false, // <== disable this!
	},
}
