<script>
	import Folder from "$lib/treedemo/folder.svelte";
	import Fib from "$lib/documentation/fibonaccidoc.md";
	import TreeDoc from "$lib/documentation/treedemo.md";
	import ParticleRain from "../particlerain.svelte";
	import Example from "../example-markdown.md";
	import About from "../about.svelte";
	import Pattern from "../pattern.svelte";
	// import Trefoil from "../../../save/trefoil.svelte";
	import ListViewDoc from "../listviewdoc.md";
	// import Globe from "../../../save/canvasexample.svelte";
	import Audio from "../audioplayer/index.svelte";
	let component = Audio;
	const pickedItem = (event) => {
		component = event.detail.component;
	}
	// const pickedFile = (event) => {
	// 	component = event.detail.component;
	// };
	// const pickedFolder = (event) => {
	// 	component = event.detail.component;
	// };

	let root = [
		{
			type: "folder",
			name: "Particle Rain",
			component: ParticleRain,
			files: [
				{
					type: "file",
					name: "Fibonacci-Documentation",
					component: Fib,
				},
			],
		},
		{
			type: "folder",
			name: "Canvas Graphics",
			component: Pattern,
			files: [
				{
					type: "folder",
					name: "Trefoil",
					component: ParticleRain,
					files: [
						{ type: "file", name: "List View and Covid Statistics Documentation", component: ListViewDoc },
						{
							type: "file",
							name: "TreeDemo-Documentationn",
							component: TreeDoc,
						},
					],
				},
				{
					type: "folder",
					name: "Canvas Globe",
					component: ParticleRain,
					files: [
						{
							type: "file",
							name: "Audio Player",
							component: Audio,
						},
						{
							type: "file",
							name: "rampage.gif",
							component: Example,
						},
					],
				},
				{ type: "file", name: "cat-roomba.gif", component: Fib },
				{ type: "file", name: "duck-shuffle.gif", component: Fib },
				{ type: "file", name: "monkey-on-a-pig.gif", component: Fib },
			],
		},
		{ type: "file", name: "TODO.md", component: Fib },
	];
</script>
<svelte:head>
	<title>Tree Demo</title>
</svelte:head>
<div class="container">
	<div>
		<Folder
			name="Home"
			component={component}
			files={root}
			expanded
			on:fileSelected={pickedItem}
			on:folderSelected={pickedItem}
		/>
	</div>
	<div>
		<svelte:component this={component} />
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 3fr 6fr;
	}
	.container >* {
		padding: 10px;
	}
</style>
