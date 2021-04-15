<script>
    // from https://svelte.dev/repl/82b00644720a4ca2bdb89c6a653ec987
    import { treevalue } from "$lib/stores.js";
    import Tree from "$lib/treedemo/Tree.svelte";
    import Panel from "$lib/treedemo/Panel.svelte";
    let tree_value;

    const unsubscribe = treevalue.subscribe((value) => {
        tree_value = value;
    });
</script>

<div class="treecontainer">
    <h1>Tree Demonstration</h1>
    <div class="treepanel">
        <div >
            <Tree />
        </div>
        <div class="panel">
            <Panel />
        </div>
    </div>
</div>

<style scoped>
    .treecontainer {
        margin-left: 10%;
        margin-top: 10%;
    }
    .treepanel {
        padding: 10px;
        border: black, 5px, solid;
        display: grid;
        grid-template-columns: 300px auto;
        height: 500px;
        background-color: lightblue;
    }
    .panel {
        border: black, 5px, solid;
        /* background-color: blue; */
    }
</style>
