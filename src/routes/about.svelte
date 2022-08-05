<script>
	import NewsletterOpenAction from '@components/newsletter/newsletter-open-action.svelte'
import { CONFIG } from '@config';
</script>

<h1 class="m-auto w-max pt-8 text-4xl font-bold lg:text-6xl">About Bitswired</h1>

<section class="bg-white py-10 lg:text-xl">
	<div class=" m-auto max-w-[800px] space-y-4 p-4">
		<h2 class="text-3xl font-bold text-secondary-500">Newsletter</h2>

		<p>The Bitswired newsletter is a means to interact directly with you. Learning never ends!</p>

		<p>
			I'm constantly looking for cutting-edge technologies, trying new tools, and reading papers. I
			will share my findings with you regularly via a curated digest of valuable information. It is
			published every two weeks.
		</p>

		<p>
			It won't be a no-reply email, so I invite you to answer to spark interesting conversations.
		</p>

		<p>If you're not already, give it a try and subscribe 🚀.</p>

		<NewsletterOpenAction>
			<button class="btn-solid-secondary mt-4">SUBSCRIBE</button>
		</NewsletterOpenAction>
	</div>
</section>

<section class="bg-black py-10 lg:text-xl text-white">
	<div class=" m-auto max-w-[800px] space-y-4 p-4">
		<h2 class="text-3xl font-bold text-primary-500">Bitswired</h2>

		<p>
			I'm creating Bitswired to share my enthusiasm for digital technologies and related sciences.
			From programming to artificial intelligence and more!
		</p>

		<p>Let's build a community to learn and discover together!</p>

		<p>What can you expect?</p>

		<p>
			Regular articles about AI, programming, tutorials, in-depth guides ... Community-driven
			content to get you involved in the process. A Discord community and Newsletter for tech
			enthusiasts.
		</p>
	</div>
</section>

<section class="bg-white py-10 lg:text-xl">
	<div class=" m-auto max-w-[800px] space-y-4 p-4">
		<h2 class="text-3xl font-bold text-secondary-500">Me</h2>

		<p>
			I am a 28 years old machine learning engineer based in Switzerland. I studied at EPFL where I
			first got a Bachelor's degree in Computer Science/Communication Systems, and then a Master's
			degree in Data Science.
		</p>

		<p>
			I currently work at Visium, an AI startup where we build state-of-the-art artificial
			intelligence solutions to empower the digital transformation of businesses.
		</p>

		<p>
			My main interests are in artificial intelligence, computer graphics, and web development
			(back-end and front-end).
		</p>

        <a class="btn-solid-secondary mt-4 inline-block" href={CONFIG.socials.linkedin} alt="Jimi Vaubien Linkedin">Find Me On Linkedin</a>
        <a class="btn-solid-primary mt-4 inline-block" href="mailto:jimi.vaubien@bitswired.com" alt="Bitswired contact">Contact Me By Email</a>
	</div>
</section>
