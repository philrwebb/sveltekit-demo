<script>
    import Row from "./row.svelte";
    // import { createEventDispatcher } from "svelte";

    // const dispatch = createEventDispatcher();

    // function sendMessage(event) {
    //     console.log(event);
    //     dispatch("message", {
    //         rowvalue: event.derowvalue,
    //     });
    // }
    export let rowdata;
    $: displaydata = [...rowdata.sort((a, b) => (a[1] > b[1] ? 1 : 0))];
    const gap = "1px";
</script>

<div class="listcontainer" style="grid-gap: {gap}">
    {#each displaydata as rowvalue}
        <Row {rowvalue} style="grid-gap: {gap};" on:message />
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
