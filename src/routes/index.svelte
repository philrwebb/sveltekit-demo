`
<div class="container">
    <div class="content">
        <p>
            The code for this site can be found <a
                href="https://github.com/philrwebb/sveltekit-demo"
                target="_blank">here</a
            >
        </p>
        <p>
            <a href="./pattern">Pattern</a>: This uses the canvas element to
            provide an eternally changing pattern.
        </p>
        <p>
            <a href="./particlerain">Particle Rain</a>: - takes an image and
            messes with it.
        </p>
        <!-- <p>
            <a href="./canvasexample">Canvas Globe</a> - uses svelte.canvas to display
            a globe.
        </p> -->
        <!-- <p>
            <a href=./example-markdown>Documentation</a> - Svelte markdown component with instructions on using markdown
        </p> -->
        <p>
            <a href="./trefoil">Canvas Trefoil Knot</a> - uses svelte.canvas to display
            a trefoil.
        </p>
        <!-- <p>
            <a href=./counter>Writable Store</a> - uses svelte store to pass values between components.
        </p> -->
        <p>
            <a href="./fibonacci">Fibonacci Example</a> - uses BigInt and an
            efficient algorithm to calculate very large Fib numbers. Here is
            some <a href="./fibonaccidoc">documentation</a> about this.
        </p>
        <p>
            <a href="./treedemo">Tree Demo</a> - A demonstration of a dynamic tree
            with expand/collapse. Raises events back to container so that another
            control on the panel can be set.
        </p>
        <!-- <p>
            <a href=./listview>List View Demo</a> - A svelte listview component that takes an array of arrays and displays as table. 
        </p> -->
        <p>
            <a href="./covidstats">Live Covid Statistics</a> - A svelte
            component that fetches data from a covid json dataset and displays.
            Here is some <a href="./listviewdoc">documentation</a> about this component
            and the underlying List component that it uses.
        </p>
    </div>
</div>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10%;
    }
    .content 
    {
        margin-left: 10%;
        margin-right: 10%;
        padding: 10px;
    }

</style>
