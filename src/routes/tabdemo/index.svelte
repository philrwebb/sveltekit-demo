<script>
    import Tabs from "$lib/tabs/tabs.svelte";
    import Tab from "$lib/tabs/tab.svelte";
    import Fibdoc from "$lib/documentation/fibonaccidoc.md";
    import Lvdoc from "../listviewdoc.md";
    import Treedoc from "$lib/documentation/treedemo.md";
    // import Globe from "../../../save/canvasexample.svelte";
    import ParticleRain from "../particlerain.svelte";
    // import Trefoil from "../../../save/trefoil.svelte";
    import Fib from "../fibonacci.svelte";
    import Covid from "../covidstats/index.svelte";
    import Pattern from "../pattern.svelte";
    import Tree from "../treedemo/index.svelte";
    import Audio from "../audioplayer/index.svelte";
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
    <!-- <Tab id="4" title="Globe">
        <Globe />
    </Tab> -->
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
    <Tab id="9" title="Canvas Pattern">
        <Pattern />
    </Tab>
    <Tab id="10" title="Tree Demo">
        <Tree />
    </Tab>
    <Tab id="11" title="Audio Player">
        <Audio />
    </Tab>
</Tabs>
