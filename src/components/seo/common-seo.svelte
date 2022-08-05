<script lang="ts">
	import { page } from '$app/stores'
	import { CONFIG } from '@config'

	interface CommonProps {
		title: string
		description: string
		image: string
	}

	export let meta: CommonProps

	const pathname = $page.url.pathname
	const canonicalUrl = `${CONFIG.seo.publicUrl}/${pathname}`
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:site_name" content={CONFIG.seo.siteName} />

	<meta name="twitter:handle" content={CONFIG.socials.twitterUserHandle} />
	<meta name="twitter:site" content={CONFIG.socials.twitterSiteHandle} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content={meta.image} />
</svelte:head>
