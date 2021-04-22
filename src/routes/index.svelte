<div class="container">
    <!-- <div class="tree">
        <ul>
            <li><a href=./pattern>Pattern</a></li>
            <li><a href=./particlerain>Particle Rain</a></li>
            <li><a href=./canvasexample>Canvas Globe</a></li>
            <li><a href=./trefoil>Canvas Trefoil Knot</a></li>
            <li><a href=./counter>Writable Store</a></li>
            <li><a href=./fibonacci>Fibonacci Example</a></li>
            <li><a href=./treedemo>Tree Demonstration</a></li>
        </ul>
    </div> -->
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
        <p>
            <a href=./example-markdown>Documentation</a> - Svelte markdown component with instructions on using markdown
        </p>
        <p>
            <a href=./trefoil>Canvas Trefoil Knot</a> - uses svelte.canvas to display a trefoil.
        </p>
        <p>
            <a href=./counter>Writable Store</a> - uses svelte store to pass values between components.
        </p>
        <p>
            <a href=./fibonacci>Fibonacci Example</a> - uses BigInt and an efficient algorithm to calculate very large Fib numbers.   
        </p>
        <p>
            <a href=./treedemo>Tree Demo</a> - A demonstration of a dynamic tree with expand/collapse.
        </p>
        <p>
            <a href=./listview>List View Demo</a> - A svelte listview component that takes an array of arrays and displays as table.
        </p>
    </div>
</div>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: 1fr;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-content: space-between;
    }
    li {
        padding: 2px;
        margin: 2px;
    }
    .tree {
        margin: 10px;
        border: 2px solid black;
    }
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 10px;
        border: 2px solid grey;
        justify-content: space-evenly;
        align-content: center;
    }
    .content > p {
        margin: 10px;
        /* border: 2px solid lightblue; */
    }
</style>
