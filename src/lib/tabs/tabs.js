import { writable } from 'svelte/store'
export let tabsdata = writable({
    titles: [],
    selectedTab: 0,
});