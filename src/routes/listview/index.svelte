<script>
    import List from "$lib/listview/list.svelte";
    import { rowsdata } from "$lib/stores.js";
    let rowdata = [];
    rowsdata.subscribe((value) => {
        rowdata = [...value];
    });

</script>

<div>
    <p>
        <a href="listviewdoc">documentation</a>
    </p>
    {#if rowdata.length > 0}
        <List {rowdata} />
    {:else}
        <p>loading . . .</p>
    {/if}
</div>

<style>
    div {
        width: 100%;
    }
</style>
