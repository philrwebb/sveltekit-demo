<script>
        import numeral from "numeral";
        import http from "$lib/httpStore.js";
        import List from "$lib/listview/list.svelte";

        $: showDetail = false;
        $: rowdata = [];
        $: detailrowdata = [];
        $: pickedRow = [];
        const covidSummary = http({});
        const covidDetail = http([]);
        /* Someone clicked on a country row*/
        function handleMessage(event) {
                pickedRow = $covidSummary.Countries.filter(
                        (c) => c.CountryCode === event.detail.rowvalue[1]
                );
                if (pickedRow.length == 1) {
                        console.log(pickedRow[0].Slug);
                        covidDetail.get(
                                `https://api.covid19api.com/total/country/${pickedRow[0].Slug}`
                        );
                }
        }
        /* Toggles between summary screen and detail screen */
        function toggleShowDetail() {
                if (showDetail) {
                        detailrowdata = [];
                }
                showDetail = !showDetail;
        }
        /* Populate the Detail data */
        covidDetail.subscribe((value) => {
                if (value.length && value.length > 0) {
                        showDetail = true;
                        detailrowdata = [];
                        /* Heading Row */
                        detailrowdata.push([
                                "Confirmed",
                                "Deaths",
                                "Recovered",
                                "Active",
                                "Date",
                        ]);
                        /* Detail Rows */
                        value.forEach((element) => {
                                detailrowdata.push([
                                        numeral(element.Confirmed).format(
                                                "0,0"
                                        ),
                                        numeral(element.Deaths).format("0,0"),
                                        numeral(element.Recovered).format(
                                                "0,0"
                                        ),
                                        numeral(element.Active).format("0,0"),
                                        new Date(element.Date)
                                                .toISOString()
                                                .slice(0, 10),
                                ]);
                        });
                        detailrowdata.sort((a, b) => (a[4] < b[4] ? 1 : -1));
                }
        });
        /* populate the summary data */
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
                                numeral(value.Global.NewConfirmed).format(
                                        "0,0"
                                ),
                                numeral(value.Global.TotalConfirmed).format(
                                        "0,0"
                                ),
                                numeral(value.Global.NewDeaths).format("0,0"),
                                numeral(value.Global.TotalDeaths).format("0,0"),
                                numeral(value.Global.NewRecovered).format(
                                        "0,0"
                                ),
                                numeral(value.Global.TotalRecovered).format(
                                        "0,0"
                                ),
                        ]);
                        /* Country Data */
                        value.Countries.forEach((element) => {
                                rowdata.push([
                                        element.Country,
                                        element.CountryCode,
                                        numeral(element.NewConfirmed).format(
                                                "0,0"
                                        ),
                                        numeral(element.TotalConfirmed).format(
                                                "0,0"
                                        ),
                                        numeral(element.NewDeaths).format(
                                                "0,0"
                                        ),
                                        numeral(element.TotalDeaths).format(
                                                "0,0"
                                        ),
                                        numeral(element.NewRecovered).format(
                                                "0,0"
                                        ),
                                        numeral(element.TotalRecovered).format(
                                                "0,0"
                                        ),
                                ]);
                        });
                        console.log(rowdata);
                }
        });
        covidSummary.get("https://api.covid19api.com/summary");
</script>

{#if $covidSummary.Countries && $covidSummary.Global}
        <div class="resultscontainer">
                {#if !showDetail}
                        <div class="rowdata">
                                <h1>
                                        Country Data - click on any row for
                                        detailed data
                                </h1>
                                <List {rowdata} on:message={handleMessage} />
                        </div>
                {:else}
                        <!-- <div class="spacer" />  -->

                        {#if detailrowdata && detailrowdata.length > 0}
                                <div class="detailrowdata">
                                        <div class="header">
                                                <h1>
                                                        Detail Data about {pickedRow[0]
                                                                .Country}
                                                </h1>

                                                <button
                                                        on:click={toggleShowDetail}
                                                        >Return to Country
                                                        Summary</button
                                                >
                                        </div>
                                        <List rowdata={detailrowdata} />
                                </div>
                        {/if}
                {/if}
        </div>
{:else}
        <p>loading . . .</p>
{/if}

<style>
        .resultscontainer {
                display: grid;
                align-content: space-between;
        }
        .header {
                display: grid;
                grid-template-columns: 1fr 1fr;
                justify-items: left;
                align-items: center;
                align-content: space-around;
        }
        button {
                /* margin-bottom: 10px; */
                cursor: pointer;
        }
</style>
