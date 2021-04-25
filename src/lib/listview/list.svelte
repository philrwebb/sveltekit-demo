<script>
    import Row from "./row.svelte";
    export let rowdata;
    const gap = "5px";
</script>

<span class="listcontainer" style="grid-gap: {gap}">
    {#each rowdata as rowvalue}
        <Row {rowvalue} style="grid-gap: {gap};" />
    {:else}
        No Data Provided
    {/each}
</span>

<style>
    .listcontainer {
        display: grid;
    }
</style>
