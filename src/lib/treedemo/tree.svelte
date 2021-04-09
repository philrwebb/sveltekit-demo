<script context="module">
    // retain module scoped expansion state for each tree node
    const _expansionState = {
        /* treeNodeId: expanded <boolean> */
    };
</script>

<script>
    import { treevalue } from "$lib/stores";

    import { update_keyed_each } from "svelte/internal";
    //	import { slide } from 'svelte/transition'
    export let tree;

    const { label, children } = tree;

    let expanded = _expansionState[label] || false;
    const toggleExpansion = () => {
        expanded = _expansionState[label] = !expanded;
    };
    const addOne = () => {
        const newChild = { label: "New York" };
        const { label, children } = $treevalue;
        let newchildren = [newChild, ...children];
        treevalue.update((n) => n = {label, children: [...newchildren]});
        console.log($treevalue);
    };
    $: arrowDown = expanded;
</script>

<ul>
    <!-- transition:slide -->
    <li>
        {#if children}
            <span on:click={toggleExpansion}>
                <span class="arrow" class:arrowDown>&#x25b6</span>
                {label}
            </span>
            {#if expanded}
                {#each children as child}
                    <svelte:self tree={child} />
                {/each}
            {/if}
        {:else}
            <span on:click={addOne}>
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
