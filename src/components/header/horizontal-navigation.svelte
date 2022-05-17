<script>
	import { CONFIG } from '@config';
	const paths = CONFIG.navigation.paths;
</script>

<ul class="text-white flex">
	{#each paths as path}
		<li class="mx-4 hover:text-primary-500 uppercase">
			<a href={path.path}>
				{path.name}
			</a>
		</li>
	{/each}
</ul>
