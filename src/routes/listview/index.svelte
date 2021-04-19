<script>
    import List from "$lib/listview/list.svelte";
    let rowdata = [
        ["oranges", "lemons ", "pears  ", "apples ", "melons"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
        ["hello  ", "goodbye", "ciao   ", "whatsup", "ooroo"],
    ];
</script>

<div>
    <List {rowdata} />
</div>

<style scoped>
    div {
        width: 100%;
    }
</style>
