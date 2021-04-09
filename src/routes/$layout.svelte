<nav>
    <a href="/">Home</a>
    <a href="example-markdown">Documentation</a>
    <a href="pattern">Pattern</a>
    <a href="particlerain">Particle Rain</a>
    <a href="canvasexample">Canvas Globe</a>
    <a href="trefoil">Canvas Trefoil Knot</a>
    <a href="counter">Writable Store</a>
    <a href="fibonacci">Fibonacci Example</a>
    <a href="treedemo">Tree Demo</a>
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
        /* width: 100% */
    }
</style>
