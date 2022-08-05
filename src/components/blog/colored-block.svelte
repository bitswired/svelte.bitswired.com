<script lang="ts">
    import clsx from "clsx"

    export let type: string
    export let content: string

</script>

<span class={clsx(
    type === 'info' && 'bg-primary-200 border-primary-500',
    type === 'warning' && 'bg-yellow-200 border-yellow-500',
    type === 'error' && 'bg-red-200 border-red-500',
    'block p-2 border-l-8 bg-prima pl-6'
    )}>
        {@html content}
</span>