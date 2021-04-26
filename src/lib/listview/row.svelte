<script>
    import Cell from "./cell.svelte";
    export let rowvalue = [];
    let nocols = rowvalue.length;
    const gap = "4px";
</script>

<span class="rowcontainer" style="grid-template-columns: repeat({nocols},1fr);grid-gap: {gap};">
    {#each rowvalue as cellvalue}
        <Cell {cellvalue} />
    {/each}
</span>

<style scoped>
    .rowcontainer {
        display: grid;
    }

</style>
