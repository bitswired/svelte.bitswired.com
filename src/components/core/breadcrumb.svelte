<script lang="ts">
	export let sections
</script>

<nav>
	<ul class="flex text-md lg:text-xl">
		{#each sections as section, i}
			<li>
				<a href={section.href} title={section.title} class="text-secondary-500 hover:underline">
					{section.title}
				</a>
			</li>

			{#if i < sections.length - 1}
                <p class="mx-2"> > </p>
			{/if}
		{/each}
	</ul>
</nav>
