<script>
        import { covidSummary } from "$lib/stores.js";
        import numeral from "numeral";
        const { Global, Countries } = $covidSummary;
        // console.log(Countries.filter(c => c.Country.startsWith("Aus")));
</script>

<!-- <p>{filtertext}</p>
<input :value={filtertext} type="text" /> -->
<ul class="countriescontainer">
        <ul class="headingcontainer">
                <li>Country</li>
                <li>Country Code</li>
                <li>New Confirmed</li>
                <li>Total Confirmed</li>
                <li>New Deaths</li>
                <li>Total Deaths</li>
                <li>New Recovered</li>
                <li>Total Recovered</li>
        </ul>
        <ul class="worldcontainer">
                <li>World</li>
                <li>-</li>
                <li class="statistic">{numeral(Global.NewConfirmed).format('0,0')}</li>
                <li class="statistic">{numeral(Global.TotalConfirmed).format('0,0')}</li>
                <li class="statistic">{numeral(Global.NewDeaths).format('0,0')}</li>
                <li class="statistic">{numeral(Global.TotalDeaths).format('0,0')}</li>
                <li class="statistic">{numeral(Global.NewRecovered).format('0,0')}</li>
                <li class="statistic">{numeral(Global.TotalRecovered).format('0,0')}</li>
        </ul>
        {#each Countries as country}
                <li>
                        <ul class="countrycontainer">
                                <li>{country.Country}</li>
                                <li>{country.CountryCode}</li>
                                <li class="statistic">
                                        {numeral(country.NewConfirmed).format('0,0')}
                                </li>
                                <li class="statistic">
                                        {numeral(country.TotalConfirmed).format('0,0')}
                                </li>
                                <li class="statistic">{numeral(country.NewDeaths).format('0,0')}</li>
                                <li class="statistic">{numeral(country.TotalDeaths).format('0,0')}</li>
                                <li class="statistic">
                                        {numeral(country.NewRecovered).format('0,0')}
                                </li>
                                <li class="statistic">
                                        {numeral(country.TotalRecovered).format('0,0')}
                                </li>
                        </ul>
                </li>
        {/each}
</ul>

<style>
        ul {
                list-style: none;
        }
        .countriescontainer {
                display: grid;
                /* padding: 5px; */
                grid-gap: 10px;
        }
        .headingcontainer li {
                justify-self: center;
        }
        .countrycontainer,
        .headingcontainer,
        .worldcontainer {
                display: grid;
                grid-template-columns: repeat(8, 1fr);
                grid-gap: 5px;
                border: black 1px solid;
                justify-content: space-around;
                /* padding: 10px; */
        }
        .statistic {
                justify-self: right;
        }
</style>
