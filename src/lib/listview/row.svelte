<script>
    import Cell from "./cell.svelte";
    export let rowvalue = [];
    let nocols = rowvalue.length;
</script>

<span class="rowcontainer" style="grid-template-columns: repeat({nocols},1fr);">
    {#each rowvalue as cellvalue}
        <Cell {cellvalue} />
    {/each}
</span>

<style scoped>
    .rowcontainer {
        display: grid;
        grid-gap: 2px;
    }
</style>
