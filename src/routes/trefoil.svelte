<script>
    // adapted from https://observablehq.com/@mbostock/trefoils
    import { Canvas, Layer } from "svelte-canvas";
    import Knot from "$lib/Knot.svelte";
    import { N } from "$lib/m";
    let width = 640;
    let height = 800;

    const background = ({ context, width, height }) => {
        context.restore();
        context.save();

        context.fillStyle = "#fff";
        context.lineCap = "square";

        context.clearRect(0, 0, width, height);
        context.translate(width / 2, height / 2 + 28);
    };

    const params = [
        [(N * 2) / 9, (N * 3) / 9, 0],
        [(N * 5) / 9, (N * 6) / 9, 0],
        [(N * 8) / 9, (N * 9) / 9, 0],
        [(N * 0) / 9, (N * 1) / 9, 5],
        [(N * 3) / 9, (N * 4) / 9, 5],
        [(N * 6) / 9, (N * 7) / 9, 5],
        [(N * 0) / 9 - 1, (N * 2) / 9 + 1, 0],
        [(N * 3) / 9 - 1, (N * 5) / 9 + 1, 0],
        [(N * 6) / 9 - 1, (N * 8) / 9 + 1, 0],
    ];
</script>

<div class="trefoilcontainer">
    <Canvas {width} {height}>
        <Layer render={background} />
        {#each params as [i0, i1, wo]}
            <Knot {i0} {i1} {wo} />
        {/each}
    </Canvas>
</div>

<style scoped>
    .trefoilcontainer {
        /* padding: 50px; */
        display: flex;
        justify-content: center;
        align-content: center;
    }
</style>
