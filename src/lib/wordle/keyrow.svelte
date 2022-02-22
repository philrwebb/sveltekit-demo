<script>
  import Key from "./key.svelte";
  export let keysInRow = [];
</script>

<span class="keyrow">
  {#each keysInRow as key}
    <Key letter={key} on:keypressed />
  {/each}
</span>

<style>
  .keyrow {
    display: flex;
    flex-direction: row;
    margin: 2px;
  }
</style>
