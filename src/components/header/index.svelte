<script>
	import { slide } from 'svelte/transition'
	import HorizontalNavigation from './horizontal-navigation.svelte'
	import BarsIcon from 'svelte-icons/fa/FaBars.svelte'
	import CloseIcon from 'svelte-icons/fa/FaTimes.svelte'
	import { CONFIG } from '@config'
	import Socials from '@components/socials/index.svelte'
	import NewsletterOpenAction from '@components/newsletter/newsletter-open-action.svelte'

	const paths = CONFIG.navigation.paths

	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
		if (isMenuOpen) {
			document.body.style['overflow'] = 'hidden'
		} else {
			document.body.style['overflow'] = 'auto'
		}
	}
</script>

{#if isMenuOpen}
	<div class="fixed top-0 left-0 h-[100vh] w-[100vw] bg-black opacity-95" transition:slide on:click={toggleMenu}>
		<div class="absolute top-8 right-8 text-white">
			<i class="block w-6 md:hidden">
				<CloseIcon />
			</i>
		</div>

		<div class="flex h-[100%] w-[100%] flex-col items-center gap-16 pt-[10vh]">
			<img class="w-[200px]" src="/logo.svg" alt="bitswired logo" />

			<nav>
				<ul class="flex w-max flex-col gap-8 text-xl text-white">
					{#each paths as path}
						<li class="mx-4 uppercase hover:text-primary-500">
							<a href={path.path}>
								{path.name}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<NewsletterOpenAction>
				<button class="btn-outline-secondary text-[1.5em]"> SUBSCRIBE </button>
			</NewsletterOpenAction>

			<Socials />
		</div>
	</div>
{/if}

<div class="flex h-[80px] items-center justify-between bg-black px-8">
	<img class="h-[50%] w-[120px]" src="/logo.svg" alt="bitswired logo" />

	<div class="hidden md:block">
		<HorizontalNavigation />
	</div>

	<div class="text-white">
		<i class="block w-6 md:hidden" on:click={toggleMenu}>
			<BarsIcon />
		</i>
	</div>
</div>
