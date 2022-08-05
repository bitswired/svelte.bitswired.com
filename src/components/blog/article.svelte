<script lang="ts">
	import Figure from '@components/blog/figure.svelte'
	import GroupCodeBlock from '@components/blog/group-code-block.svelte'
	import ColoredBlock from '@components/blog/colored-block.svelte'

	export let article
</script>

{#each article.attributes.body as component}
	{#if component.__typename == 'ComponentRichContentBasicRichBlock'}
		{@html component.content}
	{:else if component.__typename == 'ComponentRichContentFigure'}
		<Figure src={component.media} caption={component.caption} ratio={component.ratio} />
	{:else if component.__typename == 'ComponentRichContentCodeBlockGroup'}
		<GroupCodeBlock
			parsedCode={component.blocks[0].parsedCode}
			collapsable={component.collapsable}
			title={component.title}
			url={component.blocks[0].url}
		/>
	{:else if component.__typename == 'ComponentRichContentColoredBlock'}
		<ColoredBlock type={component.type} content={component.content} />
	{/if}
{/each}

<style>
	:global(.codespan) {
		color: green !important;
		background-color: #e2e8f0;
		border-radius: 0.375rem;
	}
</style>
