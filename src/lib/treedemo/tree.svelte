<script context="module">
    // retain module scoped expansion state for each tree node
    const _expansionState = {
    };
    // let _tree = null;
</script>

<script>

    import { treevalue, selectedNode } from "$lib/stores";

    //	import { slide } from 'svelte/transition'
    export let tree = null;

    // let label, children;

    if (tree === null) {
        treevalue.subscribe((value) => {
            tree = value;
        });
    }
    const {label, children} = tree;

    let expanded = _expansionState[label] || false;
    const toggleExpansion = () => {
        expanded = _expansionState[label] = !expanded;
        console.log($selectedNode, tree.label, tree.children, tree);
        // selectedNode.update((n) => n = {label: t.label, children: t.children});
    };
    const clicked = (t) => {
        console.log(t);
        selectedNode.update((n) => n = {label: t.label, children: t.children});
        console.log($selectedNode, t.label, t.children);        
        // const newChild = {
        //     label: "New York",
        //     children: [{ label: "Brooklyn Bridge" }],
        // };
        // const { label, children } = _tree;
        // let newchildren = [...children, newChild];
        // treevalue.update((n) => (n = { label, children: newchildren }));
        // console.log(_tree);
    };
    $: arrowDown = expanded;
</script>

<ul>
    <!-- transition:slide -->
    <li>
        {#if children}
            <span on:click={toggleExpansion()}>
                <span class="arrow" class:arrowDown>&#x25b6</span>
                {label}
            </span>
            {#if expanded}
                {#each children as child}
                    <svelte:self tree={child} />
                {/each}
            {/if}
        {:else}
            <span on:click={clicked({ label })}>
                <span class="no-arrow" />
                {label}
            </span>
        {/if}
    </li>
</ul>

<style>
    ul {
        margin: 0;
        list-style: none;
        padding-left: 1.2rem;
        user-select: none;
    }
    .no-arrow {
        padding-left: 1rem;
    }
    .arrow {
        cursor: pointer;
        display: inline-block;
        /* transition: transform 200ms; */
    }
    .arrowDown {
        transform: rotate(90deg);
    }
</style>
