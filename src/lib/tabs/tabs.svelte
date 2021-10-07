<script>
    import {tabsdata} from './tabs.js';
    export let selectedTab = "1";
    $: $tabsdata.selectedTab = selectedTab;
    $: updateProps($tabsdata.selectedTab);
    function updateProps(value) {
        selectedTab = value;
    }
</script>

<div class="container">
    {#each $tabsdata.titles as { id, title }}
        <button
            class:selected={$tabsdata.selectedTab === id}
            on:click={() => {
                $tabsdata.selectedTab = id;
            }}
        >
            {title}
        </button>
    {/each}
</div>
<div>
    <slot {selectedTab} />
</div>

<style>
    button.selected {
        background: black;
        color: white;
    }
    div {
        margin: 20px;
    }
    .container {
        display: flex;
        gap: 5px;

    }
    button {
        flex: 1;
    }
</style>
