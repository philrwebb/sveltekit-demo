/** @type {import('@types/d3-scale-chromatic')} */
import {interpolateRainbow} from 'd3-scale-chromatic';

const N = 360,
			r = 84;

const tau = 2 * Math.PI;

function x(q) {
	return Math.sin(q) + 2 * Math.sin(2 * q);
}

function xp(q) {
	return Math.cos(q) + 4 * Math.cos(2 * q);
}

function y(q) {
	return Math.cos(q) - 2 * Math.cos(2 * q);
}

function yp(q) {
	return -Math.sin(q) - 4 * Math.sin(2 * q);
}

function xpn(q) {
	return xp(q) / dist(xp(q), yp(q), 0, 0);
}

function ypn(q) {
	return yp(q) / dist(xp(q), yp(q), 0, 0);
}

function z(q) {
	return Math.sin(3 * q);
}

function dist(x1, y1, x2, y2) {
	return Math.hypot(x2 - x1, y2 - y1);
}

function map(value, start1, stop1, start2, stop2) {
	return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

function lerp(start, stop, t) {
	return start * (1 - t) + stop * t;
}

function ease(p, g) {
	return p < 0.5
		? 0.5 * Math.pow(2 * p, g)
	: 1 - 0.5 * Math.pow(2 * (1 - p), g);
}

const colors = Array.from({ length: N }, (_, i) => interpolateRainbow((i / N) * 3))

export { N, r, tau, x, xp, y, yp, xpn, ypn, z, dist, map, lerp, ease, colors }
