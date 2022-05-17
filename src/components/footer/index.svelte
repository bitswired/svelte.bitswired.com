<script>
	import { CONFIG } from '@config';
    import Socials from '@components/socials/index.svelte';

	const paths = CONFIG.navigation.paths;
</script>

<div class="bg-black text-white">
	<div class="grid grid-cols-1 gap-y-16 p-16 md:grid-cols-3">

		<div class="m-auto flex w-max flex-col items-center md:items-start gap-4">
			<div class="text-[2em] md:text-[2.5em]">
				<span class="text-primary-500">Wire Up!</span> Subscribe <br /> To The Newsletter
			</div>
			<button class="btn-outline-secondary text-[1.5em]"> SUBSCRIBE </button>
		</div>

		<div class="flex flex-col items-center gap-4">
			<div class="text-[2em] md:text-[2.5em] text-center">Socials</div>
            <Socials/>
		</div>

		<div class="flex flex-col items-center gap-4">
			<div class="text-center text-[2em] md:text-[2.5em]">Pages</div>

			<ul class="text-center text-white">
				{#each paths as path}
					<li class="mx-4 hover:text-primary-500">
						<a href={path.path}>
							{path.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="py-8 text-center text-lg text-slate-400">
		Copyright © 2022 Bitswired. All Rights Reserved.
	</div>
</div>
