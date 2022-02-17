<script>
  import List from "$lib/listview/list.svelte";
  import { getPage } from "./store.js";
  export let rows;
  export let header;
  export let next;
  export let previous;

  const getNextPage = () => {
    getPage(next);
  };
  const getPreviousPage = () => {
    getPage(previous);
  };
</script>

<List headerdata={header} rowdata={rows} />
<div class="buttoncontainer">
  {#if previous && previous.length > 0}
    <button on:click={getPreviousPage}>Prev</button>
  {:else}
    <button disabled>Prev</button>
  {/if}
  {#if next !== null && next !== undefined && next.length > 10}
    <button on:click={getNextPage}>Next</button>
  {:else}
    <button disabled>Next</button>
  {/if}
</div>

<style>
  .buttoncontainer {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }
</style>
