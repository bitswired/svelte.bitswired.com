<script>
	import BigCard from '@components/blog/article-card/big-card.svelte'
	import NewsletterForm from '@components/newsletter/newsletter-form.svelte'
	import CommonSeo from '@components/seo/common-seo.svelte'

	export let articles
</script>

<!-- TODO: Semantic -->
<!-- TODO: Website Image -->
<!-- TODO: X SiteMap -->
<!-- TODO: X Fix newsletter modal: feature to close it  -->
<!-- TODO: X About page  -->
<!-- TODO: X Google Analytics  -->
<!-- TODO: Google Analytics subscription event  -->
<!-- TODO: Home page features  -->
<!-- TODO: Thank you page  -->
<!-- TODO: SEO -->
<!-- TODO: Add favicon  -->

<CommonSeo
	meta={{
		title: 'Embrace The Data Era',
		description:
			'Artificial Intelligence, Programming, ... and much more! Tutorials, In-depth guides, Research papers ... Join the community!',
		image: ''
	}}
/>

<div class="flex h-[calc(100vh-80px)] flex-col items-center gap-6 bg-black pt-4">
	<h1 class="flex flex-col gap-6 text-[5rem] md:text-[10rem]">
		<span class="hero-text mb-[-0.4em] block animate-text1">Data AI,</span>
		<span class="hero-text m-w-[100%] mb-[-0.4em] block animate-text2 text-center leading-[1.2]">
			Block Chain,
		</span>
		<span class="hero-text block animate-text3 ">Web</span>
	</h1>
	<div class="w-[100%] max-w-[800px]">
		<NewsletterForm />
	</div>
</div>

<section class="flex flex-col items-center gap-8">
	<div class="w-max font-serif text-4xl font-medium lg:text-6xl">Latest Blog Articles</div>

	<div class="flex w-max max-w-[100%] flex-col justify-around gap-8 p-4 lg:flex-row">
		{#each articles as article}
			<BigCard {article} />
		{/each}
	</div>
</section>
