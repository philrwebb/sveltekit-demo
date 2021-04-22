<script>
    import List from "$lib/listview/list.svelte";
    import { rowsdata } from "$lib/stores.js";;
    let rowdata = $rowsdata;
    $: rowdata.sort((a,b) => a[0] < b[0] ? 0 : 1)
</script>
<div>
    <List {rowdata} />
</div>
<style scoped>
    div {
        width: 100%;
    }
</style>
