<script>
  import { onMount } from "svelte";
  import {
    people,
    ships,
    planets,
    vehicles,
    species,
    films,
    loadAll,
  } from "./store.js";
  import Tabs from "$lib/tabs/tabs.svelte";
  import Tab from "$lib/tabs/tab.svelte";
  import SWPanel from "./starwarspanel.svelte";
  onMount(() => {
    loadAll();
  });
  $: selectedTab = "1";
</script>

<Tabs bind:selectedTab>
  <Tab id="1" title="People" class="tab">
    {#if $people && $people.rows && $people.rows.length}
      <SWPanel
        header={$people.header}
        rows={$people.rows}
        next="{$people.next},"
        previous={$people.previous}
      />
    {:else}
      <div class="empty">No data</div>
    {/if}
  </Tab>
  <Tab id="2" title="Ships" class="tab">
    {#if $ships && $ships.rows && $ships.rows.length > 0}
      <SWPanel
        header={$ships.header}
        rows={$ships.rows}
        next={$ships.next}
        previous={$ships.previous}
      />
    {/if}
  </Tab>
  <Tab id="3" title="Planets" class="tab">
    {#if $planets && $planets.rows && $planets.rows.length > 0}
      <SWPanel
        header={$planets.header}
        rows={$planets.rows}
        next={$planets.next}
        previous={$planets.previous}
      />
    {/if}
  </Tab>
  <Tab id="4" title="Vehicles" class="tab">
    {#if $vehicles && $vehicles.rows && $vehicles.rows.length > 0}
      <SWPanel
        header={$vehicles.header}
        rows={$vehicles.rows}
        next={$vehicles.next}
        previous={$vehicles.previous}
      />
    {/if}
  </Tab>
  <Tab id="5" title="Species" class="tab">
    {#if $species && $species.rows && $species.rows.length > 0}
      <SWPanel
        header={$species.header}
        rows={$species.rows}
        next={$species.next}
        previous={$species.previous}
      />
    {/if}
  </Tab>
  <Tab id="6" title="Films" class="tab">
    {#if $films && $films.rows && $films.rows.length > 0}
      <SWPanel
        header={$films.header}
        rows={$films.rows}
        next={$films.next}
        previous={$films.previous}
      />
    {/if}
  </Tab>
</Tabs>
