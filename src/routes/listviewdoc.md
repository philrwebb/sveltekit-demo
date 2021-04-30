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
```
The List component can be used like this:
```
    <script>
        import List from "$lib/listview/list.svelte";
        import { rowsdata } from "$lib/stores.js";
        let rowdata = [...$rowsdata];
    </script>

    <div>
        <List {rowdata} />
    </div>

    <style>
        div {
            width: 100%;
        }
    </style>
```
Unrelated to the problem at hand, I have populated my rowdata from a covid19 statistics repository
```
<script>
        import http from "$lib/httpStore.js";
        import List from "$lib/listview/list.svelte";
        import numeral from "numeral";
        let rowdata = [];
        const covidSummary = http({});
        covidSummary.subscribe((value) => {
                console.log(value);
                if (value.Global) {
                        rowdata = [];
                        /* Heading Row */
                        rowdata.push([
                                "Country",
                                "Country Code",
                                "New Confirmed",
                                "Total Confirmed",
                                "New Deaths",
                                "Total Deaths",
                                "New Recovered",
                                "Total Recovered",
                        ]);
                        /* World Data */
                        rowdata.push([
                                "World",
                                "-",
                                numeral(value.Global.NewConfirmed).format('0,0'),
                                numeral(value.Global.TotalConfirmed).format('0,0'),
                                numeral(value.Global.NewDeaths).format('0,0'),
                                numeral(value.Global.TotalDeaths).format('0,0'),
                                numeral(value.Global.NewRecovered).format('0,0'),
                                numeral(value.Global.TotalRecovered).format('0,0'),
                        ]);
                        /* Country Data */
                        value.Countries.forEach((element) => {
                                rowdata.push([
                                        element.Country,
                                        element.CountryCode,
                                        numeral(element.NewConfirmed).format('0,0'),
                                        numeral(element.TotalConfirmed).format('0,0'),
                                        numeral(element.NewDeaths).format('0,0'),
                                        numeral(element.TotalDeaths).format('0,0'),
                                        numeral(element.NewRecovered).format('0,0'),
                                        numeral(element.TotalRecovered).format('0,0'),
                                ]);
                        });
                        console.log(rowdata);
                }
        });
        covidSummary.get("https://api.covid19api.com/summary");
</script>
 
{#if $covidSummary.Countries && $covidSummary.Global}
        <List {rowdata} />
{:else}
        <p>loading</p>
{/if}
```

