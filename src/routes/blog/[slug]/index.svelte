<script>
	import { page } from '$app/stores'
	import Breadcrumb from '@components/core/breadcrumb.svelte'
	import Toc from '@components/blog/toc.svelte'
	import Meta from '@components/blog/meta.svelte'
	import clsx from 'clsx'
	import Image from '@components/core/image.svelte'
	import CommonSeo from '@components/seo/common-seo.svelte'
	import ArticleSeo from '@components/seo/article-seo.svelte'
	import { CONFIG } from '@config'
	import Article from '@components/blog/article.svelte'

	export let article

	const sections = [
		{
			href: '/blog',
			title: 'Blog'
		},
		{
			href: '/blog',
			title: article.attributes.category.data.attributes.name
		}
	]

	if (article.attributes.serie.data) {
		sections.push({
			href: '/blog',
			title: article.attributes.serie.data.attributes.name
		})
	}

	const titleImageSrc = `/blog-articles/${article.id}/cover.png`
	const titleImageAbsoluteSrc = `${CONFIG.api.assets.basePath}/blog-articles/${article.id}/cover.png`
</script>

<CommonSeo
	meta={{
		title: article.attributes.title,
		description: article.attributes.description,
		image: article.titleImageAbsoluteSrc
	}}
/>

<ArticleSeo
	meta={{
		title: article.attributes.title,
		description: article.attributes.description,
		image: titleImageAbsoluteSrc,
		dateCreated: article.attributes.timestampCreatedAt,
		datePublished: article.attributes.timestampPublisehAt,
		dateModified: article.attributes.timestampUpdatedAt,
		author: {
			name: 'Jimi Vaubien',
			url: 'https://www.linkedin.com/in/jimi-vaubien/'
		}
	}}
/>

<article
	class="m-auto grid max-w-[1400px] grid-cols-1 justify-around gap-8 px-4 pt-8 lg:grid-cols-3"
>
	<nav class={clsx('lg:col-start-1 lg:col-span-2')}>
		<Breadcrumb {sections} />
	</nav>

	<h1
		class={clsx(
			'font-serif text-3xl lg:text-6xl font-medium',
			`lg:col-start-1 lg:col-span-2 lg:max-w-[900px]`
		)}
	>
		{article.attributes.title}
	</h1>

	<div class="aspect-[16/9] lg:col-span-2 lg:col-start-1 lg:max-w-[900px]">
		<Image
			src={titleImageSrc}
			alt={article.attributes.title}
			width={800}
			quality={95}
			class={clsx('rounded-md object-cover w-full h-full')}
		/>
	</div>

	<aside
		class={clsx(
			'flex flex-col gap-4',
			'lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-3 lg:sticky lg:top-[100px]'
		)}
	>
		<Toc toc={article.toc} />
		<Meta {article} />
	</aside>

	<div
		class={clsx(
			'prose prose-figcaption:text-center prose-headings:scroll-mt-[80px] ',
			'prose-table:table-auto',
			'prose-a:text-secondary-500',
			'lg:prose-xl',
			`lg:col-start-1 lg:col-span-2 max-w-[900px]`,
			'mb-8'
		)}
	>
		<Article {article} />
	</div>
</article>
