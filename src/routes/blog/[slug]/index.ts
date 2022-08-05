import Prism from 'prismjs'
import { marked } from 'marked'
import { format, parseISO } from 'date-fns'
import nunjucks from 'nunjucks'

import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-bash.js'
import { getArticleBySlug } from '@lib/cms'

function convertUrl(url: string, articleId: string) {
	// TODO: Remove that when fixed
	if (url.includes('/blog/')) {
		const r = /\/blog\/([0-9]+)\//
		return url.replace(r, (match, str) => {
			return `/blog-articles/${parseInt(str) + 1}/`
		})
	} else {
		return `https://assets.bitswired.com/blog-articles/${articleId}/${url}`
	}
}

/** @type {import('./__types/[slug]').RequestHandler} */
export async function get({ params }) {
	const article = await getArticleBySlug(params.slug)

	const toc = []

	const renderer = {
		link(href: string, title: string, text: string) {
			const t = title ? title : text
			const internalLink = `<a href=${href} title=${t}>${text}</a>`
			const externalLink = `<a href=${href} title=${t} target="_blank">${text}</a>`

			if (href.startsWith('http')) return externalLink
			return internalLink
		},

		heading(text: string, level: string) {
			const anchor = text.toLowerCase().replaceAll(' ', '-')
			toc.push({ level, text, anchor })
			return `<h${level} id="${anchor}"> ${text} </h${level}>`
		},

		codespan(text: string) {
			return `<code class="codespan">${text}</code>`
		}
	}

	marked.use({ renderer })
	nunjucks.configure({ autoescape: true })

	const render = (content, data) => {
		return marked.parse(nunjucks.renderString(content, data))
	}

	article.attributes.body = article.attributes.body.map((x) => {
		if (x.__typename === 'ComponentRichContentBasicRichBlock') {
			return { ...x, content: render(x.content, article.attributes.data) }
		} else if (x.__typename === 'ComponentRichContentColoredBlock') {
			return { ...x, content: render(x.textContent, article.attributes.data) }
		} else if (x.__typename === 'ComponentRichContentCodeBlockGroup') {
			const blocks = x.blocks.map((y) => {
				const language = y.language?.data?.attributes?.name.toLowerCase()
				const parsedCode = language ? Prism.highlight(y.code, Prism.languages[language]) : y.code
				return { language: x.programming_language, parsedCode, url: y.url }
			})
			return { ...x, blocks }
		} else if (x.__typename === 'ComponentRichContentFigure') {
			return { ...x, media: convertUrl(x.media, article.id) }
		}
		return x
	})

	article.toc = toc
	;['createdAt', 'updatedAt', 'publishedAt'].forEach((key) => {
		article.attributes[key] = format(parseISO(article.attributes[key]), 'MMM d, yyyy')
	})

	return {
		body: { article }
	}

	return {
		status: 404
	}
}
