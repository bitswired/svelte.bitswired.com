<script>
	import { CONFIG } from '@config';
	import DiscordIcon from 'svelte-icons/fa/FaDiscord.svelte';
	import LinkedinIcon from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import InstaIcon from 'svelte-icons/fa/FaInstagram.svelte';
	import TwitterIcon from 'svelte-icons/fa/FaTwitter.svelte';
</script>

<div class="flex gap-6 text-primary-500 w-[200px]">
	<a class="h-8" href={CONFIG.socials.discord} title="Discord Community" target="_blank">
		<i >
			<DiscordIcon />
		</i>
	</a>
	<a class="h-8" href={CONFIG.socials.linkedin} title="Linkedin Account" target="_blank">
		<i >
			<LinkedinIcon />
		</i>
	</a>
	<a class="h-8" href={CONFIG.socials.instagram} title="Instagram Account" target="_blank">
		<i >
			<InstaIcon />
		</i>
	</a>
	<a class="h-8" href={CONFIG.socials.twitter} title="Twitter Account" target="_blank">
		<i >
			<TwitterIcon />
		</i>
	</a>
</div>
