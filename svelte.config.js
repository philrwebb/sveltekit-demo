/** @type {import('@sveltejs/kit').Config} */
import node from '@sveltejs/adapter-netlify';
import {mdsvex} from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
// import pkg from './package.json';

const config = {
    // options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
    compilerOptions: null,

    // an array of file extensions that should be treated as Svelte components
    extensions: ['.svelte', ...mdsvexConfig.extensions],

    kit: {
        adapter: node(),
        target: '#svelte',
    },

    // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
    preprocess: [
        mdsvex(mdsvexConfig),
    ],
};

export default config;