<div class="container">
    <div class="content">
        <p>
            <a href=./pattern>Pattern</a>: This uses the canvas element to provide an eternally changing pattern.
        </p>
        <p>
            <a href=./particlerain>Particle Rain</a>: - takes an image and messes with it.
        </p>
        <p>
            <a href=./canvasexample>Canvas Globe</a> - uses svelte.canvas to display a globe.
        </p>
        <!-- <p>
            <a href=./example-markdown>Documentation</a> - Svelte markdown component with instructions on using markdown
        </p> -->
        <p>
            <a href=./trefoil>Canvas Trefoil Knot</a> - uses svelte.canvas to display a trefoil.
        </p>
        <!-- <p>
            <a href=./counter>Writable Store</a> - uses svelte store to pass values between components.
        </p> -->
        <p>
            <a href=./fibonacci>Fibonacci Example</a> - uses BigInt and an efficient algorithm to calculate very large Fib numbers.   
        </p>
        <!-- <p>
            <a href=./treedemo>Tree Demo</a> - A demonstration of a dynamic tree with expand/collapse.
        </p> -->
        <!-- <p>
            <a href=./listview>List View Demo</a> - A svelte listview component that takes an array of arrays and displays as table. 
        </p> -->
        <p>
            <a href=./covidstats>Live Covid Statistics</a> - A svelte component that fetches data from a covid json dataset and displays.
        </p>
    </div>
</div>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: 1fr;
    }
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 10px;
        border: 2px solid grey;
        justify-content: space-evenly;
        align-content: center;
        background-color: lightgrey;
    }
    .content > p {
        margin: 10px;
        /* border: 2px solid lightblue; */
    }
</style>
