module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	theme: {
		fontFamily: {
      serif: 'Roboto Serif, serif',
      sans: 'Open Sans, sans-serif',
      mono: 'JetBrains Mono, monospace',
		},
		extend: {
			colors: {
				primary: {
					100: '#03160c',
					200: '#094224	',
					300: '#0f6f3c',
					400: '#149b54',
					500: '#1ddd78',
					600: '#61e7a1',
					700: '#8eeebc',
					800: '#bbf5d7	',
					900: '#e8fcf2'
				},
				secondary: {
					100: '#010e18',
					200: '#032947	',
					300: '#064477',
					400: '#085fa7',
					500: '#0b88ee',
					600: '#54acf3',
					700: '#85c4f7',
					800: '#b6dbfa	',
					900: '#e7f3fd'
				}
			}
		}
	},
	plugins: []
};
