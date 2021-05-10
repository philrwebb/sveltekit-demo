# A tree component
I have a requirement to create a view component that is composed of:
* a dynamic tree on the left side of the screen; and 
* a panel on the right where the panel content is created by selecting a node in the tree.
## Start with the Tree component
If you search svelte.dev you will find an example of where the ```<svelte:self>``` element is used.   The svelte.dev url at https://svelte.dev/tutorial/svelte-self provided a folder, sub-folder, files example that became my starting point.
### File.svelte
```
<script>
	export let name;
	$: type = name.slice(name.lastIndexOf('.') + 1);
</script>

<span style="background-image: url(tutorial/icons/{type}.svg)">{name}</span>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>
```
### Folder.svelte
```
<script>
	import File from './File.svelte';

	export let expanded = false;
	export let name;
	export let files;

	function toggle() {
		expanded = !expanded;
	}
</script>

<span class:expanded on:click={toggle}>{name}</span>

{#if expanded}
	<ul>
		{#each files as file}
			<li>
				{#if file.type === 'folder'}
					<svelte:self {...file}/>
				{:else}
					<File {...file}/>
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	span {
		padding: 0 0 0 1.5em;
		background: url(tutorial/icons/folder.svg) 0 0.1em no-repeat;
		background-size: 1em 1em;
		font-weight: bold;
		cursor: pointer;
	}

	.expanded {
		background-image: url(tutorial/icons/folder-open.svg);
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
```
### App.svelte
```
<script>
	import Folder from './Folder.svelte';

	let root = [
		{
			type: 'folder',
			name: 'Important work stuff',
			files: [
				{ type: 'file', name: 'quarterly-results.xlsx' }
			]
		},
		{
			type: 'folder',
			name: 'Animal GIFs',
			files: [
				{
					type: 'folder',
					name: 'Dogs',
					files: [
						{ type: 'file', name: 'treadmill.gif' },
						{ type: 'file', name: 'rope-jumping.gif' }
					]
				},
				{
					type: 'folder',
					name: 'Goats',
					files: [
						{ type: 'file', name: 'parkour.gif' },
						{ type: 'file', name: 'rampage.gif' }
					]
				},
				{ type: 'file', name: 'cat-roomba.gif' },
				{ type: 'file', name: 'duck-shuffle.gif' },
				{ type: 'file', name: 'monkey-on-a-pig.gif' }
			]
		},
		{ type: 'file', name: 'TODO.md' }
	];
</script>

<Folder name="Home" files={root} expanded/>
```
## Enhance the tree component
### Firstly, the file
```
<script>
    import { createEventDispatcher } from "svelte";
    export let name;
    $: type = name.slice(name.lastIndexOf(".") + 1);
    const dispatch = createEventDispatcher();
    function sendMessage() {
        dispatch("fileSelected", {
            fileName: name,
        });
    }
</script>

<span
    on:click|self={sendMessage}
    style="background-image: url(https://svelte.dev/tutorial/icons/{type}.svg)"
>
    {name}
</span>

<style>
    span {
        padding: 0 0 0 1.5em;
        background: 0 0.1em no-repeat;
        background-size: 1em 1em;
    }
</style>
```
Changes include:
* import the svelte createEventDispatcher so that we can dispatch events from this component
* change the relative url for the image location.
* add an on:click handler on the span element - note the self event modifier because the event.target is the element itself.
* create the handler function and use the createEventDispatcher dispatch method to publish the event and and add the required data to the event - in this case the name of the element that was clicked.
### Next, the folder
```
<script>
	import { createEventDispatcher } from "svelte";
	import File from "./file.svelte";

	export let expanded = false;
	export let name;
	export let files;
	const dispatch = createEventDispatcher();
	function toggle() {
		expanded = !expanded;
		dispatch("folderSelected", {
			folderName: name,
			files,
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
```
Changes include:
* import the svelte createEventDispatcher so that we can dispatch events from this component
* span element already has an on:click handler (toggle).   Although we do need to include the self event modifier as we now want to dispatch this event.
* dispatch the folderSelected event with event data of name and files.
* because we want to bubble the folderSelected and fileSelected event, we need to add on:fileSelected and on:folderSelected to the svelte:self element and on:fileSelected to the File element.
* replaced the relative url for file location in the style section 
### Finally the driving component

