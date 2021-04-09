<script>
	import { count } from "$lib/stores.js";
	import Incrementer from "$lib/Incrementer.svelte";
	import Decrementer from "$lib/Decrementer.svelte";
	import Resetter from "$lib/Resetter.svelte";

	let count_value;

	const unsubscribe = count.subscribe((value) => {
		count_value = value;
	});
</script>

<div class="localcontainer">
	<h1>The count is {count_value}</h1>
	<div class="buttoncontainer">
		<Incrementer />
		<Decrementer />
		<Resetter />
	</div>
</div>

<style scoped>
	.localcontainer {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
	}
	.buttoncontainer {
		display: flex;
	}
</style>
