<script>
    import { slide } from 'svelte/transition';
	import HorizontalNavigation from './horizontal-navigation.svelte';
	import BarsIcon from 'svelte-icons/fa/FaBars.svelte';
	import CloseIcon from 'svelte-icons/fa/FaTimes.svelte';
	import { CONFIG } from '@config';

	const paths = CONFIG.navigation.paths;

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            document.body.style['overflow'] = 'hidden';
        } else {

            document.body.style['overflow'] = 'auto';
        }
	}
</script>

{#if isMenuOpen}
	<div class="fixed top-0 left-0 h-[100vh] w-[100vw] bg-black opacity-90" transition:slide>
		<div class="absolute top-8 right-8 text-white">
			<i class="block h-4 w-4 md:hidden" on:click={toggleMenu}>
				<CloseIcon />
			</i>
		</div>

		<div class="h-[100%] w-[100%] ">
			<ul class="m-auto flex flex-col gap-8 text-white w-max pt-[20vh] text-xl">
				{#each paths as path}
					<li class="mx-4 uppercase hover:text-primary-500">
						<a href={path.path}>
							{path.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}

<div class="flex h-[80px] items-center justify-between bg-black px-8">
	<img class="h-[50%]" src="/logo.svg" alt="bitswired logo" />

	<div class="hidden md:block">
		<HorizontalNavigation />
	</div>

	<div class="text-white">
		<i class="block h-4 w-4 md:hidden" on:click={toggleMenu}>
			<BarsIcon />
		</i>
	</div>
</div>

