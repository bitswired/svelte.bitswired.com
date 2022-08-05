module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	theme: {
		fontFamily: {
			serif: 'Roboto Serif, serif',
			sans: 'Open Sans, sans-serif',
			mono: 'JetBrains Mono, monospace'
		},
		extend: {
			colors: {
				primary: {
					900: '#03160c',
					800: '#094224	',
					700: '#0f6f3c',
					600: '#149b54',
					500: '#1ddd78',
					400: '#61e7a1',
					300: '#8eeebc',
					200: '#bbf5d7	',
					100: '#e8fcf2'
				},
				secondary: {
					900: '#010e18',
					800: '#032947	',
					700: '#064477',
					600: '#085fa7',
					500: '#0b88ee',
					400: '#54acf3',
					300: '#85c4f7',
					200: '#b6dbfa	',
					100: '#e7f3fd'
				}
			},
			animation: {
				text1: 'text 4s ease infinite',
				text2: 'text 10s ease infinite reverse',
				text3: 'text 10s ease infinite'
			},
			keyframes: {
				text: {
					'0%': {
						'background-size': '300%',
						'background-position': '-200% center'
					},
					'100%': {
						'background-size': '300%',
						'background-position': '200% center'
					}
				}
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						},
						pre: {
							color: null,
							backgroundColor: null,
							margin: '0 !important',
						},
						"pre code": {
							color: null,
							backgroundColor: null,
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')]
}
