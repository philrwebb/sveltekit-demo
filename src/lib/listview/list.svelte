<script>
    import Row from "./row.svelte";
    export let rowdata;
    $: displaydata = [...rowdata.sort((a,b) => a[1] > b[1] ? 1 : 0)];
    const gap = "5px";
</script>

<span class="listcontainer" style="grid-gap: {gap}">
    {#each displaydata as rowvalue}
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
