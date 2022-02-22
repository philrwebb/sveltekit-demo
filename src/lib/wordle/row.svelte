<script>
	import Box from "./box.svelte";
	export let rowstate = [];
</script>

<div class="row">
	{#each rowstate as boxstate}
		<Box {boxstate} />
	{/each}
</div>

<style>
	.row {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		justify-items: center;
		grid-gap: 5px;
	}
</style>