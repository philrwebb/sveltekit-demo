import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-c58bc032.js",
			css: ["/./_app/assets/start-a8cd1609.css"],
			js: ["/./_app/start-c58bc032.js","/./_app/chunks/vendor-1404d6b4.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/example-markdown\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/example-markdown.md"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/fibonaccidoc\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/fibonaccidoc.md"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/particlerain\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/particlerain.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/audioplayer\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/audioplayer/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/listviewdoc\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/listviewdoc.md"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/covidstats\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/covidstats/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/fibonacci\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/fibonacci.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/listview\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/listview/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/settings\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/settings.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/starwars\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/starwars/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/starwars\/starwarspanel\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/starwars/starwarspanel.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/starwars\/store\/?$/,
						params: empty,
						load: () => import("../../src/routes/starwars/store.js")
					},
		{
						type: 'page',
						pattern: /^\/treedemo\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/treedemo/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/apidemo\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/apidemo/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/apidemo\/([^/]+?)\/?$/,
						params: (m) => ({ lastName: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/apidemo/[lastName].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/counter\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/counter/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/dynamic\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/dynamic/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/pattern\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/pattern.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/tabdemo\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/tabdemo/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/?$/,
						params: empty,
						load: () => import("../../src/routes/api/index.js")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/([^/]+?)\/?$/,
						params: (m) => ({ lastName: d(m[1])}),
						load: () => import("../../src/routes/api/[lastName].js")
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/example-markdown.md": () => import("../../src/routes/example-markdown.md"),"src/routes/fibonaccidoc.md": () => import("../../src/routes/fibonaccidoc.md"),"src/routes/particlerain.svelte": () => import("../../src/routes/particlerain.svelte"),"src/routes/audioplayer/index.svelte": () => import("../../src/routes/audioplayer/index.svelte"),"src/routes/listviewdoc.md": () => import("../../src/routes/listviewdoc.md"),"src/routes/covidstats/index.svelte": () => import("../../src/routes/covidstats/index.svelte"),"src/routes/fibonacci.svelte": () => import("../../src/routes/fibonacci.svelte"),"src/routes/listview/index.svelte": () => import("../../src/routes/listview/index.svelte"),"src/routes/settings.svelte": () => import("../../src/routes/settings.svelte"),"src/routes/starwars/index.svelte": () => import("../../src/routes/starwars/index.svelte"),"src/routes/starwars/starwarspanel.svelte": () => import("../../src/routes/starwars/starwarspanel.svelte"),"src/routes/treedemo/index.svelte": () => import("../../src/routes/treedemo/index.svelte"),"src/routes/apidemo/index.svelte": () => import("../../src/routes/apidemo/index.svelte"),"src/routes/apidemo/[lastName].svelte": () => import("../../src/routes/apidemo/[lastName].svelte"),"src/routes/counter/index.svelte": () => import("../../src/routes/counter/index.svelte"),"src/routes/dynamic/index.svelte": () => import("../../src/routes/dynamic/index.svelte"),"src/routes/pattern.svelte": () => import("../../src/routes/pattern.svelte"),"src/routes/tabdemo/index.svelte": () => import("../../src/routes/tabdemo/index.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-7e184b06.js","css":["/./_app/assets/pages/__layout.svelte-7d55c0ac.css"],"js":["/./_app/pages/__layout.svelte-7e184b06.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-6414afa1.js","css":[],"js":["/./_app/error.svelte-6414afa1.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-add23e51.js","css":["/./_app/assets/pages/index.svelte-6a899900.css"],"js":["/./_app/pages/index.svelte-add23e51.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/example-markdown.md":{"entry":"/./_app/pages/example-markdown.md-785ce411.js","css":[],"js":["/./_app/pages/example-markdown.md-785ce411.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/fibonaccidoc.md":{"entry":"/./_app/pages/fibonaccidoc.md-91a92562.js","css":[],"js":["/./_app/pages/fibonaccidoc.md-91a92562.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/particlerain.svelte":{"entry":"/./_app/pages/particlerain.svelte-c24a6698.js","css":["/./_app/assets/pages/particlerain.svelte-f46ffd44.css"],"js":["/./_app/pages/particlerain.svelte-c24a6698.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/audioplayer/index.svelte":{"entry":"/./_app/pages/audioplayer/index.svelte-9aa0057f.js","css":["/./_app/assets/pages/audioplayer/index.svelte-60b66078.css"],"js":["/./_app/pages/audioplayer/index.svelte-9aa0057f.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/listviewdoc.md":{"entry":"/./_app/pages/listviewdoc.md-eb010e59.js","css":[],"js":["/./_app/pages/listviewdoc.md-eb010e59.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/covidstats/index.svelte":{"entry":"/./_app/pages/covidstats/index.svelte-eab56bec.js","css":["/./_app/assets/pages/covidstats/index.svelte-eb0598ea.css","/./_app/assets/list-388239ef.css"],"js":["/./_app/pages/covidstats/index.svelte-eab56bec.js","/./_app/chunks/vendor-1404d6b4.js","/./_app/chunks/list-76c573a6.js"],"styles":null},"src/routes/fibonacci.svelte":{"entry":"/./_app/pages/fibonacci.svelte-4e91263a.js","css":["/./_app/assets/pages/fibonacci.svelte-16b5df49.css"],"js":["/./_app/pages/fibonacci.svelte-4e91263a.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/listview/index.svelte":{"entry":"/./_app/pages/listview/index.svelte-576288c4.js","css":["/./_app/assets/pages/listview/index.svelte-a212d4bf.css","/./_app/assets/list-388239ef.css"],"js":["/./_app/pages/listview/index.svelte-576288c4.js","/./_app/chunks/vendor-1404d6b4.js","/./_app/chunks/list-76c573a6.js","/./_app/chunks/stores-98c4fa8f.js"],"styles":null},"src/routes/settings.svelte":{"entry":"/./_app/pages/settings.svelte-b654882b.js","css":[],"js":["/./_app/pages/settings.svelte-b654882b.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/starwars/index.svelte":{"entry":"/./_app/pages/starwars/index.svelte-46f06f64.js","css":["/./_app/assets/starwarspanel-3c3053d9.css","/./_app/assets/list-388239ef.css","/./_app/assets/tab-542df137.css"],"js":["/./_app/pages/starwars/index.svelte-46f06f64.js","/./_app/chunks/vendor-1404d6b4.js","/./_app/chunks/starwarspanel-775b90a2.js","/./_app/chunks/list-76c573a6.js","/./_app/chunks/tab-a9a519d0.js"],"styles":null},"src/routes/starwars/starwarspanel.svelte":{"entry":"/./_app/pages/starwars/starwarspanel.svelte-be48a5c9.js","css":["/./_app/assets/list-388239ef.css","/./_app/assets/starwarspanel-3c3053d9.css"],"js":["/./_app/pages/starwars/starwarspanel.svelte-be48a5c9.js","/./_app/chunks/vendor-1404d6b4.js","/./_app/chunks/list-76c573a6.js","/./_app/chunks/starwarspanel-775b90a2.js"],"styles":null},"src/routes/treedemo/index.svelte":{"entry":"/./_app/pages/treedemo/index.svelte-6aca0cc6.js","css":["/./_app/assets/about.svelte_svelte&type=style&lang-42f179f3.css","/./_app/assets/index-1469acc4.css","/./_app/assets/pages/particlerain.svelte-f46ffd44.css","/./_app/assets/pages/pattern.svelte-ec6175e4.css","/./_app/assets/pages/audioplayer/index.svelte-60b66078.css"],"js":["/./_app/pages/treedemo/index.svelte-6aca0cc6.js","/./_app/chunks/vendor-1404d6b4.js","/./_app/chunks/index-62fbc0d1.js","/./_app/pages/particlerain.svelte-c24a6698.js","/./_app/pages/example-markdown.md-785ce411.js","/./_app/pages/pattern.svelte-8f53ef1b.js","/./_app/pages/listviewdoc.md-eb010e59.js","/./_app/pages/audioplayer/index.svelte-9aa0057f.js"],"styles":null},"src/routes/apidemo/index.svelte":{"entry":"/./_app/pages/apidemo/index.svelte-9c47c61e.js","css":["/./_app/assets/pages/apidemo/index.svelte-1ff651ee.css"],"js":["/./_app/pages/apidemo/index.svelte-9c47c61e.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/apidemo/[lastName].svelte":{"entry":"/./_app/pages/apidemo/[lastName].svelte-48d6bcc4.js","css":["/./_app/assets/pages/apidemo/[lastName].svelte-b1dad7d8.css"],"js":["/./_app/pages/apidemo/[lastName].svelte-48d6bcc4.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/counter/index.svelte":{"entry":"/./_app/pages/counter/index.svelte-6b2d3f89.js","css":["/./_app/assets/pages/counter/index.svelte-dbcfad1d.css"],"js":["/./_app/pages/counter/index.svelte-6b2d3f89.js","/./_app/chunks/vendor-1404d6b4.js","/./_app/chunks/stores-98c4fa8f.js"],"styles":null},"src/routes/dynamic/index.svelte":{"entry":"/./_app/pages/dynamic/index.svelte-8f9192fa.js","css":[],"js":["/./_app/pages/dynamic/index.svelte-8f9192fa.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/pattern.svelte":{"entry":"/./_app/pages/pattern.svelte-8f53ef1b.js","css":["/./_app/assets/pages/pattern.svelte-ec6175e4.css"],"js":["/./_app/pages/pattern.svelte-8f53ef1b.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null},"src/routes/tabdemo/index.svelte":{"entry":"/./_app/pages/tabdemo/index.svelte-a1470b7d.js","css":["/./_app/assets/about.svelte_svelte&type=style&lang-42f179f3.css","/./_app/assets/tab-542df137.css","/./_app/assets/index-1469acc4.css","/./_app/assets/pages/particlerain.svelte-f46ffd44.css","/./_app/assets/pages/pattern.svelte-ec6175e4.css","/./_app/assets/pages/audioplayer/index.svelte-60b66078.css","/./_app/assets/pages/fibonacci.svelte-16b5df49.css","/./_app/assets/pages/covidstats/index.svelte-eb0598ea.css","/./_app/assets/list-388239ef.css"],"js":["/./_app/pages/tabdemo/index.svelte-a1470b7d.js","/./_app/chunks/vendor-1404d6b4.js","/./_app/chunks/tab-a9a519d0.js","/./_app/chunks/index-62fbc0d1.js","/./_app/pages/particlerain.svelte-c24a6698.js","/./_app/pages/example-markdown.md-785ce411.js","/./_app/pages/pattern.svelte-8f53ef1b.js","/./_app/pages/listviewdoc.md-eb010e59.js","/./_app/pages/audioplayer/index.svelte-9aa0057f.js","/./_app/pages/fibonacci.svelte-4e91263a.js","/./_app/pages/covidstats/index.svelte-eab56bec.js","/./_app/chunks/list-76c573a6.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-4968a293.js","css":["/./_app/assets/about.svelte_svelte&type=style&lang-42f179f3.css"],"js":["/./_app/pages/about.svelte-4968a293.js","/./_app/chunks/vendor-1404d6b4.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}