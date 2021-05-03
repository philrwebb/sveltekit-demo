<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function sendMessage() {
        dispatch("rowSelected", {
            rowvalue: rowvalue,
        });
    }
    import Cell from "./cell.svelte";
    export let rowvalue = [];
    let nocols = rowvalue.length;
    const gap = "1px";
</script>

<div
    class="rowcontainer"
    style="grid-template-columns: repeat({nocols},1fr);grid-gap: {gap};"
    on:click={sendMessage}
>
    {#each rowvalue as cellvalue}
        <Cell {cellvalue} />
    {/each}
</div>

<style scoped>
    .rowcontainer {
        display: grid;
        justify-content: right;
    }
</style>
