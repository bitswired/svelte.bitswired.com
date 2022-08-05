import { CONFIG } from '@config'
import { getAllArticlesMeta } from '@lib/cms'

function xmlUrlBlock(url: string) {
	return `
	<url>
		<loc>${url}</loc>
		<changefreq>daily</changefreq>
		<priority>0.3</priority>
	</url>

  `
}

export async function get() {
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	}

	const articles = await getAllArticlesMeta(100)
	const slugs = articles.map((article) => article.attributes.slug)

	let body = ''

	body += xmlUrlBlock(CONFIG.seo.publicUrl + '/')
	body += xmlUrlBlock(CONFIG.seo.publicUrl + '/blog')
	body += xmlUrlBlock(CONFIG.seo.publicUrl + '/about')

	slugs.forEach((slug: string) => {
		body += xmlUrlBlock(CONFIG.seo.publicUrl + '/blog/' + slug)
	})

	const sitemap = `
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
${body}
</urlset>
`

	return {
		headers,
		body: sitemap
	}
}
