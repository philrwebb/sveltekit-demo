<script>
    // from https://svelte.dev/repl/82b00644720a4ca2bdb89c6a653ec987
    import { treevalue } from "$lib/stores.js";
    import Tree from "$lib/treedemo/Tree.svelte";
	let tree_value;

	const unsubscribe = treevalue.subscribe((value) => {
		tree_value = value;
        console.log(tree_value);
	});
</script>

<div class="treecontainer">
    <h1>Tree Demonstration</h1>
    <Tree />
</div>

<style>
    .treecontainer {
        margin-left: 10%;
        margin-top: 10%;
    }
</style>
