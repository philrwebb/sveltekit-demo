<script>
    import { onMount } from "svelte";
    onMount(() => {
        const canvas = document.getElementById("canvas1");
        const ctx = canvas.getContext("2d");
        canvas.width = 700;
        canvas.height = 700;
        // canvas.height = window.innerHeight;
        ctx.globalCompositeOperation = "destination-over";
        let hue = Math.random() * 360;

        let number = 1;
        let scale = 10;
        let adj = Math.random() * 1.25;
        let hueinc = 1;

        const drawFlower = () => {
            let angle = number * adj;
            let radius = scale * Math.sqrt(number);
            let positionX = radius * Math.sin(angle) + canvas.width / 2;
            let positionY = radius * Math.cos(angle) + canvas.height / 2;

            ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.arc(positionX, positionY, 10, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            number += 1;
            hue += hueinc;
        };

        const animate = () => {
            // draw each frame
            drawFlower();
            if (number > 1000) {
                number = 1;
                adj = Math.random() * 1.25;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            requestAnimationFrame(animate);
        };
        animate();
    });
</script>

<style>
    #canvas1 {
        border: 3px solid black;
        position: relative;
        /* top: 10%; */
        left: 50%;
        transform: translate(-50%, -0%);
        width: 700px;
        height: 700px;
        /* background-color: grey; */
    }
</style>

<canvas id="canvas1" />
