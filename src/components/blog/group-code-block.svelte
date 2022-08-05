<script lang="ts">
	import { slide, fade } from 'svelte/transition'

	import GitHub from 'svelte-icons/fa/FaGithub.svelte'
	import ChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'
	import ChevronRight from 'svelte-icons/fa/FaChevronRight.svelte'

	export let parsedCode: string
	export let collapsable: boolean
	export let title: string
	export let url: string

	let collapsed = true
	function toggleCollapsed() {
		collapsed = !collapsed
	}
</script>

<svelte:head>
	<link href="https://unpkg.com/prism-theme-night-owl@1.4.0/build/light.css" rel="stylesheet" />
</svelte:head>

<div class="my-4 flex flex-col justify-center rounded-lg bg-slate-200 py-4">
	<div class="flex h-max items-center gap-8 px-8">
		{#if collapsable && collapsed}
			<i in:fade class="block h-6 w-6" on:click={toggleCollapsed}>
				<ChevronRight />
			</i>
		{:else if collapsable && !collapsed}
			<i in:fade class="block h-6 w-6" on:click={toggleCollapsed}>
				<ChevronDown />
			</i>
		{/if}
		{#if title}
			<span class="m-0">
				{title}
			</span>
		{/if}
		<a href={url} title="Open code on GitHub" target="_blank">
			<i class="block h-6 w-6">
				<GitHub />
			</i>
		</a>
	</div>

	{#if collapsable && !collapsed}
		<pre transition:slide class="overflow-x-hidden bg-slate-200"><code
				class="whitespace-pre-wrap break-words">{@html parsedCode}</code
			></pre>
	{:else if !collapsable}
		<pre class="overflow-x-hidden bg-slate-200"><code class="whitespace-pre-wrap break-words"
				>{@html parsedCode}</code
			></pre>
	{/if}
</div>
