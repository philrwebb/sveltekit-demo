<script>
    import Row from "./row.svelte";
    export let rowdata = [];
</script>

<span class="listcontainer">
    {#each rowdata as rowvalue}
        <Row {rowvalue} />
    {/each}
</span>

<style scoped>
    .listcontainer {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
</style>