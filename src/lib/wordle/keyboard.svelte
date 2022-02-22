<script>
	import Keyrow from './keyrow.svelte';
	import { keyboardData } from './store.js';
</script>

<div class='keyboard'>
	{#each $keyboardData.keystate as keysInRow}
		<Keyrow {keysInRow} on:keypressed />
	{/each}
</div>

<style>
	.keyboard {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
		padding: 0;
		margin: 0;
	}
	
</style>
