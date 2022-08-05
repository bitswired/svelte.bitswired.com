<script>
	import { isNewsletterDialogOpen } from '@stores/newsletter-store'

</script>

<span on:click={isNewsletterDialogOpen.toggle}>
    <slot/>
</span>