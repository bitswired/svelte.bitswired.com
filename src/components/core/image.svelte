<script lang="ts">
	import { CONFIG } from '@config'

    export let src: string
    export let alt: string
    export let width: number
    export let quality: number
    

	export function load({ src, width, quality = 90 }) {
		return `${CONFIG.api.assets.basePath}${src}?w=${width}&q=${quality}`
	}

    const srcOptimized = load({src, width, quality})

</script>

<img class={$$props.class} src={srcOptimized} alt={alt} loading="lazy" />
