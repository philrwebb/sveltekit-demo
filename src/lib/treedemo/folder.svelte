<script>
	import { createEventDispatcher } from "svelte";
	import File from "./file.svelte";

	export let expanded = false;
	export let name;
	export let files;
	export let component;
	const dispatch = createEventDispatcher();
	function toggle() {
		expanded = !expanded;
		dispatch("folderSelected", {
			folderName: name,
			files,
			component,
		});
	}
</script>

<span class:expanded on:click|self={toggle}>{name}</span>

{#if expanded}
	<ul>
		{#each files as file}
			<li>
				{#if file.type === "folder"}
					<svelte:self {...file} on:fileSelected on:folderSelected />
				{:else}
					<File {...file} on:fileSelected />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	span {
		padding: 0 0 0 1.5em;
		background: url(https://svelte.dev/tutorial/icons/folder.svg) 0 0.1em
			no-repeat;
		background-size: 1em 1em;
		font-weight: bold;
		cursor: pointer;
	}

	.expanded {
		background-image: url(https://svelte.dev/tutorial/icons/folder-open.svg);
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid #eee;
	}

	li {
		padding: 0.2em 0;
	}
</style>
