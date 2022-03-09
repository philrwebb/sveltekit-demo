<script>
	import { onDestroy } from "svelte";
	import { tabsdata } from "./tabs.js";
	export let title;
	export let id;
	registerTab(id, title);
	onDestroy(() => {
		unregisterTab(id);
	});
	function registerTab(id, title) {
		$tabsdata.titles = [{ id, title }, ...$tabsdata.titles];
	}
	function unregisterTab(id) {
		const tabIndex = $tabsdata.titles.findIndex((title) => title.id === id);
		if (tabIndex > -1) {
			$tabsdata.titles.splice(tabIndex, 1);
			$tabsdata.titles = [...$tabsdata.titles];
		}
	}
</script>

<div>
	{#if $tabsdata.selectedTab === id}
		<slot />
	{/if}
</div>
