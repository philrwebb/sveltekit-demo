<script>
	import { Layer, t } from 'svelte-canvas'
	import { N, r, tau, x, xp, y, yp, xpn, ypn, z, dist, map, lerp, ease, colors } from './m'

	export let i0, i1, wo
	
	$: render = ({ context }) => {
    for (let a = -4; a < 5; ++a) {
			const of = 15 * (a - 0.5),
						q = -(a + 5) * ($t / 20000)

    	let theta = (tau * i0) / N;
    	let vx0, vx1 = r * x(theta) + of * ypn(theta);
    	let vy0, vy1 = r * y(theta) + of * xpn(theta);
			
   	 	if (wo) context.strokeStyle = context.fillStyle;
			
   	 	for (let i = i0 + 1; i < i1; ++i) {
				let theta = (tau * i) / N;
				(vx0 = vx1), (vx1 = r * x(theta) + of * ypn(theta));
				(vy0 = vy1), (vy1 = r * y(theta) + of * xpn(theta));
				let w = map(Math.cos(theta + tau * q), 1, -1, 0, 1);
				w = lerp(2.5, 8.5, ease(Math.max(0, Math.min(1, 3.5 * w - 2.5)), 7)) + wo;

				context.beginPath();
				context.moveTo(vx0, vy0);
				context.lineTo(vx1, vy1);
				context.lineWidth = w;
				if (!wo) context.strokeStyle = colors[i];
				context.stroke();
			}
		}
  };
</script>

<Layer {render} />