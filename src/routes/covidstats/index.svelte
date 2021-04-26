<script>
        import { covidSummary } from "$lib/stores.js";
        const { Global, Countries } = $covidSummary;
        // let filtertext = "Australia";
        console.log(Global);
        let LocalCountries = [...Countries];
        let LocalGlobal = Global;
        // console.log(Countries.filter((c) => c.Country.startsWith("In")))
        // let LocalCountries = Countries.filter((c) =>
        //                 c.Country.startsWith(filtertext)
        //         );
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
                <li class="statistic">{LocalGlobal.NewConfirmed}</li>
                <li class="statistic">{LocalGlobal.TotalConfirmed}</li>
                <li class="statistic">{LocalGlobal.NewDeaths}</li>
                <li class="statistic">{LocalGlobal.TotalDeaths}</li>
                <li class="statistic">{LocalGlobal.NewRecovered}</li>
                <li class="statistic">{LocalGlobal.TotalRecovered}</li>
        </ul>
        {#each LocalCountries as country}
                <li>
                        <ul class="countrycontainer">
                                <li>{country.Country}</li>
                                <li>{country.CountryCode}</li>
                                <li class="statistic">
                                        {country.NewConfirmed}
                                </li>
                                <li class="statistic">
                                        {country.TotalConfirmed}
                                </li>
                                <li class="statistic">{country.NewDeaths}</li>
                                <li class="statistic">{country.TotalDeaths}</li>
                                <li class="statistic">
                                        {country.NewRecovered}
                                </li>
                                <li class="statistic">
                                        {country.TotalRecovered}
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
