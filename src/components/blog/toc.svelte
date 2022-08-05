<script>
	import clsx from 'clsx'
	export let toc
</script>

<div class="rounded-md bg-slate-100 p-4 flex flex-col gap-4">
	<p class="text-2xl">Table of Content</p>

	<ul>
		{#each toc as { level, text, anchor }}
			<li
				class={clsx(
					level === 2 && 'pl-2 text-xl',
					level === 3 && 'pl-4 text-md',
					level === 4 && 'pl-6 text-sm'
				)}
			>
				<a href={`#${anchor}`} title={text} class="hover:text-secondary-500 hover:underline">
					{text}
				</a>
			</li>
		{/each}
	</ul>
</div>
