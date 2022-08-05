<script lang="ts">
    import clsx from "clsx";

    export let src: string;
    export let alt: string;
    export let size : 'sm' | 'md' | 'lg' | 'xl'
</script>

<img src={src} alt={alt} class={clsx(
    'rounded-full object-cover',
    size === 'sm' && 'w-10 h-10',
    size === 'md' && 'w-20 h-20',
    size === 'lg' && 'w-30 h-30',
    size === 'xl' && 'w-40 h-40'
)}/>

