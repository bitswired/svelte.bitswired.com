import { writable } from 'svelte/store';

function createNewsletterStore() {
    const { subscribe, set, update } = writable(false);

    return {
		subscribe,
		toggle: () => update(x => !x),
		close: () => update(x => false),
		
	};
}

export const isNewsletterDialogOpen = createNewsletterStore()