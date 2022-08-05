<script>
	import { fade } from 'svelte/transition'
	import { onMount } from 'svelte'

	import { isNewsletterDialogOpen } from '@stores/newsletter-store'
	import NewsletterForm from './newsletter-form.svelte'
	import FaTimes from 'svelte-icons/fa/FaTimes.svelte'

	onMount(() => {
		isNewsletterDialogOpen.subscribe((x) => {
			if (x) {
				document.body.style.overflowY = 'hidden'
			} else {
				document.body.style.overflowY = 'auto'
			}
		})
	})
</script>

{#if $isNewsletterDialogOpen}
	<div transition:fade={{ duration: 200 }} class="relative z-50">
		<!-- Backdrop -->
		<div class="fixed inset-0 bg-black opacity-80" aria-hidden="true" />

		<div class="fixed inset-0 flex items-center justify-center p-4">
			<div class="relative w-full rounded bg-white md:w-[60vw]">
				<i class="absolute top-4 right-4 h-4 w-4 text-white hover:cursor-pointer" on:click={isNewsletterDialogOpen.toggle}>
					<FaTimes />
				</i>

				<div class="flex flex-col-reverse lg:flex-row">
					<div class="flex flex-col gap-8 p-8 lg:w-[70%]">
						<h2 class="text-4xl font-bold">Subscribe To The Newsletter</h2>

						<p class="max-w-[50ch] text-xl">
							Stay on top of Data, AI, Web Technologies and Blockchain. Subscribe and get curated,
							releveant content straight into your inbox.
						</p>

						<NewsletterForm />
					</div>

					<div class="h-[30vh] lg:h-auto lg:w-[30%]">
						<img
							src="https://assets.bitswired.com/general/newsletter.jpg?w=3840&q=75"
							alt="Newsletter"
							class="h-full w-full rounded-r-md object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
