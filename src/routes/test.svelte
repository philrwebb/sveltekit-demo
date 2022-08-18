<script>
    import Tabs from "$lib/tabs/tabs.svelte";
    import Tab from "$lib/tabs/tab.svelte";
    import Fibdoc from "$lib/documentation/fibonaccidoc.md";

</script>
<Tabs selectedtab="1">
    <Tab id="1" title="Fibonacci Documentation">
        <Fibdoc />
    </Tab>
</Tabs>