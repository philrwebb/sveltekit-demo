<script>
  let data = {
    characterName: undefined,
    characters: undefined,
    count: 0,
  };
  let pageno = 1;
  $: promise = loadData(pageno);

  function handleClick() {
    if (pageno++ * 10 > data.count) pageno = 1;
  }

  function displayCharacter(char) {
    if (!(char === "")) console.log(char);
  }

  async function loadData(pageno) {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=${pageno}`
    );
    const people = await response.json();
    data = {
      characterName: people.results[1].name,
      characters: people.results,
      count: people.count,
    };
    return data;
  }
</script>

<main>
  <div class="left">
    <button on:click={handleClick}> load data </button>
    {#await promise}
      loading
    {:then}
      {#each data.characters as character}
        <button on:click={displayCharacter(character.name)}
          >{character.name}</button
        >
      {/each}
    {:catch error}
      exception {error.message}
    {/await}
  </div>
  <div class="right">

  </div>
</main>

<style>
  button {
    width: 50%;
    justify-self: center;
  }
  .left {
    display: flex;
    flex-direction: column;
  }
  main {
    display: grid;
    grid-template-columns: 2fr 6fr;
  }

</style>
