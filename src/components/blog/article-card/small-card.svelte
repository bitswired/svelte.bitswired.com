<script>
	import Image from '@components/core/image.svelte'

	export let article

    const titleImageSrc = `/blog-articles/${article.id}/cover.png`
</script>

<a href={`blog/${article.attributes.slug}`} title={article.attributes.title}>
	<article
		class="group flex gap-4 p-4 py-8 transition-all hover:translate-y-[-10px] hover:shadow-lg"
	>
		<div class="flex w-[70%] flex-col justify-center">
			<h2 class="font-serif text-xl font-medium line-clamp-2">{article.attributes.title}</h2>
			<p class=" line-clamp-3">{article.attributes.description}</p>
		</div>

		<div class="aspect-[4/3] max-w-[150px] self-center overflow-hidden lg:aspect-[16/9]">
			<Image
				src={titleImageSrc}
				alt={article.attributes.title}
                width={300}
				class="h-[100%] w-[100%] rounded-md object-cover transition-all group-hover:scale-[1.2]"
			/>
		</div>
	</article>
</a>
