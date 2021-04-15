<script>
    let panelNode;
    let label;
    $: panelNode;
    import { selectedNode } from "$lib/stores";
    selectedNode.subscribe((value) => {
        console.log(value);
        panelNode = value;
    });
    $: label = panelNode.label;
</script>

<div>
    You clicked: {label}
    <!-- {#if children}
        <ul>
            {#each children as child}
                <li>child.label</li>
            {/each}
        </ul>
    {/if} -->
</div>
