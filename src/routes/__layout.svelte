<svelte:head>
    <title>Home</title>
</svelte:head>
<nav>
    <a href="/">Home</a>
    <a sveltekit:prefetch href="starwars">Starwars</a>
    <a sveltekit:prefetch href="pattern">Pattern</a>
    <a sveltekit:prefetch href="particlerain">Particle Rain</a>
    <!-- <a sveltekit:prefetch href="canvasexample">Canvas Globe</a> -->
    <!-- <a sveltekit:prefetch href="trefoil">Canvas Trefoil Knot</a> -->
    <!-- <a sveltekit:prefetch href="counter">Writable Store</a> -->
    <a sveltekit:prefetch href="fibonacci">Fibonacci Example</a>
    <a svetlekit:prefetch href="treedemo">Tree Demo</a>
    <a sveltekit:prefetch href="audioplayer">Audio Player</a>
    <!-- <a sveltekit:prefetch href="listview">List Component</a> -->
    <a sveltekit:prefetch href="covidstats">Covid 19 Statistics</a>
    <a sveltekit:prefetch href="tabdemo">Tabs Demo</a>
    <a sveltekit:prefetch href="starwars">Starwars API on Tabs</a>

</nav>

<div class="content">
    <slot />
</div>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    nav {
        display: grid;
        grid-template-columns: repeat(4, 2fr);
        justify-items: space-evenly;
        align-items: space-around;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 1%;
        /* width: 100%; */
        background-color: lightblue;
        padding: 10px;
    }

    .content {
        margin-left: 10%;
        margin-right: 10%;
        padding: 10px;
    }
</style>
