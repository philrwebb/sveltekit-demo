<script>
    import Row from "./row.svelte";
    export let rowdata;
    // export let sortColumn;
    const gap = "1px";
</script>

<div class="listcontainer" style="grid-gap: {gap}">
        {#each rowdata as rowvalue}
            <Row {rowvalue} style="grid-gap: {gap};" on:rowSelected />
        {:else}
            No Data Provided
        {/each}
</div>

<style>
    .listcontainer {
        display: grid;
        cursor: pointer;
    }
</style>
