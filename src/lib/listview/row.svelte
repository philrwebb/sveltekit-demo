<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function sendMessage() {
        dispatch("rowSelected", {
            rowvalue: rowvalue,
            rowno,
        });
    }
    import Cell from "./cell.svelte";
    export let rowType = "row";
    export let rowvalue = [];
    export let rowno = 0;
    let nocols = rowvalue.length;
    const gap = "1px";
</script>

<slot>
    {#if rowType === "row"}
        <div
            class="rowcontainer"
            style="grid-template-columns: repeat({nocols},1fr);grid-gap: {gap};"
            on:click={sendMessage}
        >
            {#each rowvalue as cellvalue, cellno}
                <Cell {cellvalue} {rowno} {cellno} on:columnSelected />
            {/each}
        </div>
    {/if}
</slot>

<style scoped>
    .rowcontainer {
        display: grid;
        justify-content: right;
    }
</style>
