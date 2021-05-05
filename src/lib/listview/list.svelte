<script>
    import Row from "./row.svelte";
    export let rowdata;
    const gap = "1px";
</script>

<div class="listcontainer" style="grid-gap: {gap}">
        {#each rowdata as rowvalue}
            <Row {rowvalue} on:rowSelected />
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