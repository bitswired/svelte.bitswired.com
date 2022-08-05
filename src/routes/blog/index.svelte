<script>
	import BigCard from '@components/blog/article-card/big-card.svelte'
	import SmallCard from '@components/blog/article-card/small-card.svelte'

	export let articles
</script>

<h1 class="m-auto w-max text-4xl lg:text-6xl font-bold pt-8">Bitswired Blog</h1>

<div class="flex flex-col max-w-[800px] m-auto mt-8 divide-y">
	{#each articles as article}
		<SmallCard {article} />
	{/each}
</div>
