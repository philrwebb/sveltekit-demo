<script>
	import File from "$lib/treedemo/file.svelte";
	import Folder from "$lib/treedemo/folder.svelte";
	let fileSelected;
	$: folderSelected = "";
	$: files = [];
	const pickedFile = (event) => {
		fileSelected = event.detail.fileName;
		files = [];
	};
	const pickedFolder = (event) => {
		folderSelected = event.detail.folderName;
		files = event.detail.files;
		fileSelected = "";
	};

	let root = [
		{
			type: "folder",
			name: "Important work stuff",
			files: [{ type: "file", name: "quarterly-results.xlsx" }],
		},
		{
			type: "folder",
			name: "Animal GIFs",
			files: [
				{
					type: "folder",
					name: "Dogs",
					files: [
						{ type: "file", name: "treadmill.gif" },
						{ type: "file", name: "rope-jumping.gif" },
					],
				},
				{
					type: "folder",
					name: "Goats",
					files: [
						{ type: "file", name: "parkour.gif" },
						{ type: "file", name: "rampage.gif" },
					],
				},
				{ type: "file", name: "cat-roomba.gif" },
				{ type: "file", name: "duck-shuffle.gif" },
				{ type: "file", name: "monkey-on-a-pig.gif" },
			],
		},
		{ type: "file", name: "TODO.md" },
	];
</script>

<div class="container">
	<div>
		<Folder
			name="Home"
			files={root}
			expanded
			on:fileSelected={pickedFile}
			on:folderSelected={pickedFolder}
		/>
	</div>
	<div>
		{#if files.length > 0}
			<p>You selected the folder {folderSelected} which contains</p>
			<ul>
				{#each files as file}
					<li>{file.type} {file.name}</li>
				{/each}
			</ul>
		{:else if fileSelected}
			<p>You selected the file: {fileSelected}</p>
		{/if}
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 2fr 5fr;
	}
</style>
