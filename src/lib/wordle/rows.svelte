<script>
	import Row from "./row.svelte";
	import {gameData} from "./store.js";
</script>

<div class="row">
	{#each $gameData.rowstate as rowstate}
		<Row {rowstate} />
	{/each}
</div>

<style>
	.row {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
		grid-gap: 5px;
	}
</style>