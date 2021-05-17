<script>
    import numeral from "numeral";
    import Row from "./row.svelte";
    export let rowdata;
    export let headerdata;
    export let sortCol = 0;

    const gap = "1px";
    const compareDesc = (a, b) => {
        if (
            (!isNaN(a[sortCol]) && numeral(a[sortCol]).value() < numeral(b[sortCol]).value()) ||
            (isNaN(a[sortCol]) && a[sortCol] < b[sortCol])
        ) {
            return 1;
        } else {
            return -1;
        }
    };
    const compareAsc = (a, b) => {
        if (
            (!isNaN(a[sortCol]) && numeral(a[sortCol]).value() > numeral(b[sortCol]).value()) ||
            (isNaN(a[sortCol]) && a[sortCol] > b[sortCol])
        ) {
            return 1;
        } else {
            return -1;
        }
    };
    $: sortAsc = true;
    $: compareFunc = sortAsc ? compareAsc : compareDesc;
    $: rowdata = [...rowdata.sort(compareFunc)];
    function sortColumn(event) {
        console.log(sortCol);
        let clickedColumn = event.detail.cellno;
        if (clickedColumn !== sortCol) {
            sortAsc = !sortAsc;
        } else {
            sortAsc = !sortAsc;
        }
        sortCol = clickedColumn;
        console.log(sortCol);
    }
</script>

<div class="listcontainer" style="grid-gap: {gap}">
    {#if headerdata}
        <Row rowvalue={headerdata} on:columnSelected={sortColumn} />
    {/if}
    {#each rowdata as rowvalue, rowno}
        <Row {rowvalue} on:rowSelected {rowno} on:columnSelected={sortColumn} />
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
