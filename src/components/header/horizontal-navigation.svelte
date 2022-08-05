<script>
	import { CONFIG } from '@config'
	const paths = CONFIG.navigation.paths
</script>

<nav>
	<ul class="flex text-white">
		{#each paths as path}
			<li class="mx-4 text-xl uppercase hover:text-primary-500">
				<a href={path.path}>
					{path.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
