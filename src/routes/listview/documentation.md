# A generic listview 

The goal was to produce a component that when provided with input of an array of arrays, would render the data as a listview.  For example:
```
export const rowsdata = writable(
    [
        ["oranges", "lemons ", "pears  ", "apples ", "melons"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
        ["hello  ", "goodbye", "ciao   ", "whatsup", "ooroo"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
    ]
)
```
Would be rendered as 4 rows of 5 columns.  Obviously, the component should handle an arbitrary number of rows and also an arbitrary number of columns.

This can be broken down into three distinct components:

* A Cell component;
* A Row component;
* A List component;

Starting from the bottom up we have:

1. The Cell Component
```
    <script>
        export let cellvalue = "";
    </script>

    <span>{cellvalue}</span>

    <style scoped>
        span {
            border: black 1px solid;
            padding-left: 2px;
            padding-top: 1px;
            padding-bottom: 1px;
        }
    </style>
```
2. The Row Component
```
    <script>
        import Cell from "./cell.svelte";
        export let rowvalue = [];
        let nocols = rowvalue.length;
        const gap = "4px";
    </script>

    <span class="rowcontainer" style="grid-template-columns: repeat({nocols},1fr);grid-gap: {gap};">
        {#each rowvalue as cellvalue}
            <Cell {cellvalue} />
        {/each}
    </span>

    <style scoped>
        .rowcontainer {
            display: grid;
        }
    </style>
```
3. The List Component
```
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
```