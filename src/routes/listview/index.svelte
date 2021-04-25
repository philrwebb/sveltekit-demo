<script>
    import List from "$lib/listview/list.svelte";
    import { rowsdata } from "$lib/stores.js";
    let rowdata = [...$rowsdata];
</script>

<div>
    <p>
        <a href="listviewdoc">documentation</a>
    </p>
    <List {rowdata} />
</div>

<style>
    div {
        width: 100%;
    }
</style>
