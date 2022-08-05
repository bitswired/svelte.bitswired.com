<script>
import { isNewsletterDialogOpen } from '@stores/newsletter-store';

	import { toast } from '@zerodevx/svelte-toast'



	let loading = false

	async function handleSubmit(e) {
		const email = e.target.email.value

		loading = true
		try {
			const res = await fetch('/api/newsletter/subscribe', {
				method: 'POST',
				body: JSON.stringify({
					email
				})
			})

			if (!res.ok) {
				const errorData = await res.json()
				throw errorData
			}

			toast.push('Successfully Subscribed! Thank You!')
			isNewsletterDialogOpen.close()
		} catch (err) {
			console.log(JSON.stringify(err))

			if (err.code === 'missing_parameter') {
				toast.push('Error: you have to enter a valid email!')
			} else if (err.code === 'already_exists') {
				toast.push('You are already subscribed. Thank You!')
			} else {
				toast.push('Error ... Can you retry please?')
			}
		} finally {
			loading = false
		}
	}
</script>

<form class="flex flex-col items-center gap-4 lg:flex-row" on:submit|preventDefault={handleSubmit}>
	<input
		type="email"
		name="email"
		placeholder="Email Address"
		class="form-input w-[70%] rounded-md border-2 border-secondary-500 px-4 py-3 focus:border-primary-500"
	/>
	{#if loading}
		Loading
	{:else}
		<button class="btn-solid-secondary text-xl">SUBSCRIBE</button>
	{/if}
</form>
