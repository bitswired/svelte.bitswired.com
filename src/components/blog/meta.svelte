<script>
	import { CONFIG } from '@config'
	import Avatar from '@components/core/avatar.svelte'
	import NewsletterOpenAction from '@components/newsletter/newsletter-open-action.svelte'
	export let article
</script>

<div class="rounded-md bg-slate-100 p-4">
	<div class="flex items-center justify-around">
		<Avatar src={CONFIG.images.me} alt="Jimi Vaubien" size="md" />

		<div class="flex flex-col">
			<p class="text-lg font-bold">Jimi Vaubien</p>
			<p>Machine Learning Engineer</p>
		</div>
	</div>

	<div class="flex items-center gap-4 pl-6">
		<p>{article.attributes.readMinutes} min</p>
		<p>{article.attributes.publishedAt}</p>
		<NewsletterOpenAction>
			<button class="btn-link-secondary">Subscribe</button>
		</NewsletterOpenAction>
	</div>
</div>
