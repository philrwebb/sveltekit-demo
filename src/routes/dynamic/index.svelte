<script>
	import Box from '$lib/dynamic/Box.svelte';
	let checked;
	let as;
	const choices = ['div','span','button','h1','p','h2','h3','h4','li'];
	let index = 0
</script>

<label>Show <input bind:checked type="checkbox" /></label>
<button on:click={() => {as = choices[index++ % choices.length];}}>Toggle</button>
as: {!as ? '' : as}
{#if checked}
<Box {as}>
	<span>Box childrenhere</span>
	<a href="xxx">Link here</a>
</Box>
{/if}