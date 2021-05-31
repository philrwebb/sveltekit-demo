import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
/** @type {import('@sveltejs/kit').Config} */
import node from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

// import pkg from './package.json';

const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
    // options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
    compilerOptions: {
        format: "esm",
    },

    // an array of file extensions that should be treated as Svelte components

    kit: {
        adapter: node(),
        target: '#svelte',
    },

    // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
    preprocess: [
		mdsvex(mdsvexConfig),
        preprocess()
    ],
};

export default config;