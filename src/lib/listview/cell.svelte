<script>
    import numeral from "numeral";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let cellvalue = "";
    export let rowType = "Row";
    
    $: displayValue = !isNaN(cellvalue)
        ? numeral(cellvalue).format("0,0")
        : cellvalue;
    export let cellno = 0;
    export let rowno = 0;
    function sendMessage() {
        if (rowno === 0) {
            dispatch("columnSelected", {
                cellno: cellno,
            });
        }
    }
</script>

{#if !isNaN(cellvalue)}
    <span class="number" on:click|self={sendMessage}> {displayValue} </span>
{:else}
    {#if rowType === "Header"}
    <span class="header" on:click|self={sendMessage}>{displayValue}</span>
    {:else}
    <span on:click|self={sendMessage}>{displayValue}</span>
    {/if}
{/if}

<style scoped>
    span {
        border: black 0.5px solid;
        padding-left: 2px;
        padding-right: 2px;
        padding-top: 1px;
        padding-bottom: 1px;
        text-align: left;
    }
    .number {
        text-align: right;
    }
    .header {
        text-align: center;
    }
</style>
