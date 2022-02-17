<script>
  // import numeral from "numeral";
  import http from "$lib/httpStore.js";
  import { onMount } from "svelte";
  import List from "$lib/listview/list.svelte";
  let showDetail = false;
  let rowdata = [];
  $: detailrowdata = [];
  $: summaryheaderrowdata = [];
  $: detailheaderrowdata = [];
  $: pickedRow = [];
  let covidSummary;
  const covidDetail = http([]);
  onMount(() => {
    covidSummary = http({});
    covidSummary.get("https://api.covid19api.com/summary");
  });
  function handleMessage(event) {
    let pickedCountryCode = event.detail.rowvalue[0];
    if (event.detail.rowType !== "Header") {
      pickedRow = $covidSummary.Countries.filter(
        (c) => c.Country === pickedCountryCode
      );
      if (pickedRow.length == 1) {
        covidDetail.get(
          `https://api.covid19api.com/total/country/${pickedRow[0].Slug}`
        );
      }
    }
  }
  /* Toggles between summary screen and detail screen */
  function toggleShowDetail() {
    if (showDetail) {
      detailrowdata = [];
    }
    showDetail = !showDetail;
  }
  //   /* Populate the Detail data */
  covidDetail.subscribe((value) => {
    if (value.length && value.length > 0) {
      showDetail = true;
      detailrowdata = [];

      let lastDeaths = 0;
      let lastConfirmed = 0;
      /* Detail Rows */
      value.forEach((element) => {
        detailrowdata.push([
          element.Confirmed,
          element.Confirmed - lastConfirmed,
          element.Deaths,
          element.Deaths - lastDeaths,
          element.Recovered,
          element.Active,
          new Date(element.Date).toISOString().slice(0, 10),
        ]);
        lastDeaths = element.Deaths;
        lastConfirmed = element.Confirmed;
      });
      /* sort by descending date */
      detailrowdata.sort((a, b) => (a[6] < a[6] ? 1 : -1));
      /* Heading Row */
      detailheaderrowdata = [
        "Confirmed",
        "New Confirmed",
        "Deaths",
        "New Deaths",
        "Recovered",
        "Active",
        "Date",
      ];
    }
  });
  /* populate the summary data */
  $: covidSummary ? covidSummary.subscribe((value) => {
    if (value.Global) {
      rowdata = [];
      /* Heading Row */
      summaryheaderrowdata = [
        "Country",
        "New Confirmed",
        "Total Confirmed",
        "New Deaths",
        "Total Deaths",
        "New Recovered",
        "Total Recovered",
      ];
      /* World Data */
      rowdata.push([
        "World",
        value.Global.NewConfirmed,
        value.Global.TotalConfirmed,
        value.Global.NewDeaths,
        value.Global.TotalDeaths,
        value.Global.NewRecovered,
        value.Global.TotalRecovered,
      ]);
      /* Country Data */
      value.Countries.forEach((element) => {
        rowdata.push([
          element.Country,
          element.NewConfirmed,
          element.TotalConfirmed,
          element.NewDeaths,
          element.TotalDeaths,
          element.NewRecovered,
          element.TotalRecovered,
        ]);
      });
    }
  }) : {};
</script>

<div class="resultscontainer">
  {#if $covidSummary && $covidSummary.Countries && $covidSummary.Global}
    {#if !showDetail}
      <div class="rowdata">
        <h1>Country Data - click on any row for detailed data</h1>
        <List
          {rowdata}
          headerdata={summaryheaderrowdata}
          on:rowSelected={handleMessage}
          sortCol="0"
        />
      </div>
    {:else}
      <div class="spacer" />

      {#if detailrowdata && detailrowdata.length > 0}
        <div class="detailrowdata">
          <div class="header">
            <h1>
              Detail Data about {pickedRow[0].Country}
            </h1>

            <button on:click={toggleShowDetail}
              >Return to Country Summary</button
            >
          </div>
          <List
            rowdata={detailrowdata}
            headerdata={detailheaderrowdata}
            sortCol="6"
          />
        </div>
      {/if}
    {/if}
  {:else}
    <p>loading . . .</p>
  {/if}
</div>

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
    margin-bottom: 10px;
    cursor: pointer;
  }
</style>
