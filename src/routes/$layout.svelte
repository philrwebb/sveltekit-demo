<nav>
    <a href="/">Home</a>
    <a sveltekit:prefetch href="example-markdown">Documentation</a>
    <a sveltekit:prefetch href="pattern">Pattern</a>
    <a sveltekit:prefetch href="particlerain">Particle Rain</a>
    <a sveltekit:prefetch href="canvasexample">Canvas Globe</a>
    <a sveltekit:prefetch href="trefoil">Canvas Trefoil Knot</a>
    <a sveltekit:prefetch href="counter">Writable Store</a>
    <a sveltekit:prefetch href="fibonacci">Fibonacci Example (<a href="fibonaccidoc">doc</a>)</a>
    <a sveltekit:prefetch href="treedemo">Tree Demo</a>
    <a sveltekit:prefetch href="audioplayer">Audio Player</a>
    <a sveltekit:prefetch href="listview">List Component</a>
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
        display: flex;
        justify-content: space-evenly;
        align-content: space-around;
        /* border: 1px solid black; */
        /* background-color: lightblue; */
        height: 3vh;
        width: 100%;
    }

    .content {
        /* background-color: lightgrey; */
        height: 97vh;
        margin-left: 10%;
        margin-right: 10%;
        padding-top: 4%;
        /* width: 100% */
    }
</style>
