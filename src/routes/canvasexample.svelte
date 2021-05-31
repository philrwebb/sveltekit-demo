<script>
    import { onMount } from "svelte";
    import { Canvas, Layer, t } from "svelte-canvas";
    import tjclient from 'topojson-client';
    const { feature } = tjclient;
    import { geoOrthographic, geoPath, geoGraticule10 } from "d3-geo";

    let map,
        width = 600;
    // $: width = 640;

    const projection = geoOrthographic(),
        path = geoPath(projection);

    onMount(() =>
        fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json")
            .then((data) => data.json())
            .then((data) => (map = feature(data, "land")))
    );

    $: graticule = ({ context, width, height }) => {
        projection
            .fitSize([width, height], { type: "Sphere" })
            .rotate([$t / 50, -10]);

        context.strokeStyle = "#ccc";
        context.beginPath(), path(geoGraticule10()), context.stroke();
    };

    $: globe = ({ context }) => {
        context.fillStyle = "tomato";
        context.beginPath(), path(map), context.fill();
    };
</script>

<div class="globecontainer">
    <div bind:clientWidth={width}>
        <Canvas {width} height={width}>
            <Layer
                setup={({ context }) => path.context(context)}
                render={graticule}
            />
            <Layer render={globe} />
        </Canvas>
    </div>
</div>

<style scoped>
    .globecontainer {
        /* padding: 10px; */
        display: flex;
        justify-content: center;
        align-content: center;
        width: auto;
    }
</style>
