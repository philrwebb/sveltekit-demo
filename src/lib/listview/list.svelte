<script>
    import Row from "./row.svelte";
    export let rowdata = [];
    $: rowdata.sort((a,b) => a[0] < b[0] ? 0 : 1)
    const gap = "5px";
</script>

<span class="listcontainer" style="grid-gap: {gap}">
    {#each rowdata as rowvalue}
        <Row {rowvalue} style="grid-gap: {gap};"/>
    {:else}
        No Data Provided
    {/each}
</span>

<style scoped>
    .listcontainer {
        display: grid;
    }
</style>