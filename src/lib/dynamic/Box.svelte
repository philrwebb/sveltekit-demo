<script>
	import {onMount} from 'svelte';
	
	export let as; 
	
	let container;
	let originalContainer;
	
	onMount(() => {
		originalContainer = container;		
		return () => {
			container.parentNode.replaceChild(originalContainer, container);
		};
	});
	
	$: originalContainer && swap(as);
	
	function swap(as) {
		console.log(container.childNodes.length, as);
		if(!as || container.nodeName === as.toUpperCase())
			return;
		const target = document.createElement(as);
		while(container.childNodes.length) {
			target.appendChild(container.childNodes[0]);
		};
		container.parentNode.replaceChild(target, container);
		container = target;
	}

</script>

<div bind:this={container}><slot /></div>