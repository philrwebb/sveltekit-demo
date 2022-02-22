<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let letter = {};
  let keyLetter = letter.keyLetter;
</script>

<div
  class="key"
  on:click={() => dispatch("keypressed", { keyLetter })}
  style:background-color="{letter.color}"
>
  {keyLetter}
</div>

<style>
  .key {
    height: 3rem auto;
    width: 2rem auto;
    padding: 0 0.5rem;
    border-radius: 10%;
    border: solid 1px black;
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: #ffffff;
    margin: 0 3px;
  }
</style>
