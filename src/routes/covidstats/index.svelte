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