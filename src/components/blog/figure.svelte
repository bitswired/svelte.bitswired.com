<script lang="ts">
	import clsx from 'clsx'

	export let src: string
	export let caption: string
	export let ratio: string

</script>

<figure>
	<img
		{src}
		alt={caption}
		class={clsx(
			ratio === 'r_1' && ' aspect-[1]',
			ratio === 'r_4_3' && ' aspect-[1.33]',
			ratio === 'r_16_9' && ' aspect-[1.77]',
			ratio === 'r_21_9' && ' aspect-[21/9]',
			'm-auto rounded-md',
            'object-contain'
		)}
		loading="lazy"
	/>

	<figcaption>{caption}</figcaption>
</figure>
