<script lang="ts">
	import { page } from '$app/stores'
	import { CONFIG } from '@config'
	import type { BlogPosting, WithContext } from 'schema-dts'
	import { serializeSchema } from '@lib/seo'

	interface Author {
		name: string
		url: string
	}

	interface CommonProps {
		title: string
		description: string
		image: string
		dateCreated: string
		datePublished: string
		dateModified: string
		author: Author
	}

	export let meta: CommonProps

	const pathname = $page.url.pathname
	const canonicalUrl = `${CONFIG.seo.publicUrl}/${pathname}`

	const p: WithContext<BlogPosting> = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: meta.title,
		image: meta.image,
		dateCreated: meta.dateCreated,
		datePublished: meta.datePublished,
		dateModified: meta.dateModified,
		author: {
			'@type': 'Person',
			name: meta.author.name,
			url: meta.author.url
		},
		publisher: {
			'@type': 'Organization',
			name: CONFIG.seo.siteName,
			logo: {
				'@type': 'ImageObject',
				url: CONFIG.images.logo
			}
		}
	}
</script>

<!-- TODO: Open Graph Article -->

{@html serializeSchema(p)}
