<script>
	import Image from '@components/core/image.svelte'

	export let article

    const titleImageSrc = `/blog-articles/${article.id}/cover.png`

</script>

<article class="group flex max-w-[500px] flex-col gap-4 transition-all hover:translate-y-[-10px]">
	<div class="aspect-[16/9] overflow-hidden">
		<Image
			src={titleImageSrc}
			alt={article.attributes.title}
            width={600}
			class="rounded-t-md object-cover transition-all group-hover:scale-[1.2]"
		/>
	</div>

	<div class="flex flex-col gap-2 p-4">
		<h2 class="font-serif text-xl font-medium line-clamp-2 lg:text-[32px]">
			{article.attributes.title}
		</h2>

		<div class="flex items-center gap-4">
			<p class="text-md uppercase text-slate-500">
				{article.attributes.category.data.attributes.name}
			</p>

			<p class="text-md text-slate-500">{article.attributes.readMinutes} min</p>

			<a href={`blog/${article.attributes.slug}`} title={article.attributes.title}>
				<button class="btn-link-primary">READ</button>
			</a>
		</div>

		{#if article.attributes.serie.data}
			<p class="text-sm font-light">Series: {article.attributes.serie.data.attributes.name}</p>
		{/if}

		<p class="line-clamp-2 lg:text-xl">{article.attributes.description}</p>
	</div>
</article>
