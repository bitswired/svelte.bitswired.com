import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		preserve: ['ld+json']
	}),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		vite: {
			resolve: {
				alias: {
					'@lib': path.resolve('./src/lib'),
					'@config': path.resolve('./src/config'),
					'@components': path.resolve('./src/components'),
					'@stores': path.resolve('./src/stores')
				}
			},
			plugins: [
				visualizer((opts) => {
					return { filename: path.join(opts.dir, 'stats.html') }
				})
			]
		}
	}
}

export default config
