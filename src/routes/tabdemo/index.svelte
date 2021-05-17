<script>
    import Tabs from "$lib/tabs/tabs.svelte";
    import Tab from "$lib/tabs/tab.svelte";
    import Fibdoc from "$lib/documentation/fibonaccidoc.md";
    import Lvdoc from "../listviewdoc.md";
    import Treedoc from "$lib/documentation/treedemo.md";
    import Globe from "../canvasexample.svelte";
    import ParticleRain from "../particlerain.svelte";
    import Trefoil from "../trefoil.svelte";
    import Fib from "../fibonacci.svelte";
    import Covid from "../covidstats/index.svelte";
    $: selectedTab = "1";
</script>

<Tabs bind:selectedTab>
    <Tab id="1" title="Fibonacci Documentation">
        <Fibdoc />
    </Tab>
    <Tab id="2" title="List View Documentation">
        <Lvdoc />
    </Tab>
    <Tab id="3" title="Tree Documentation">
        <Treedoc />
    </Tab>
    <Tab id="4" title="Globe">
        <Globe />
    </Tab>
    <Tab id="5" title="Particle Rain">
        <ParticleRain />
    </Tab>
    <Tab id="6" title="Trefoil">
        <Trefoil />
    </Tab>
    <Tab id="7" title="Fibonacci">
        <Fib />
    </Tab>
    <Tab id="8" title="Covid Statistics">
        <Covid />
    </Tab>
</Tabs>
