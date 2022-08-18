const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\example-markdown.md"),
	() => import("..\\..\\..\\src\\routes\\fibonaccidoc.md"),
	() => import("..\\..\\..\\src\\routes\\particlerain.svelte"),
	() => import("..\\..\\..\\src\\routes\\audioplayer\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\listviewdoc.md"),
	() => import("..\\..\\..\\src\\routes\\covidstats\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\fibonacci.svelte"),
	() => import("..\\..\\..\\src\\routes\\listview\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\settings.svelte"),
	() => import("..\\..\\..\\src\\routes\\starwars\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\starwars\\starwarspanel.svelte"),
	() => import("..\\..\\..\\src\\routes\\treedemo\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\apidemo\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\apidemo\\[lastName].svelte"),
	() => import("..\\..\\..\\src\\routes\\counter\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\dynamic\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\pattern.svelte"),
	() => import("..\\..\\..\\src\\routes\\tabdemo\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\wordle\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\..\\src\\routes\\test.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/example-markdown.md
	[/^\/example-markdown\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/fibonaccidoc.md
	[/^\/fibonaccidoc\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/particlerain.svelte
	[/^\/particlerain\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/audioplayer/index.svelte
	[/^\/audioplayer\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/listviewdoc.md
	[/^\/listviewdoc\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/covidstats/index.svelte
	[/^\/covidstats\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/fibonacci.svelte
	[/^\/fibonacci\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/listview/index.svelte
	[/^\/listview\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/settings.svelte
	[/^\/settings\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/starwars/index.svelte
	[/^\/starwars\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/starwars/starwarspanel.svelte
	[/^\/starwars\/starwarspanel\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/starwars/store.js
	[/^\/starwars\/store\/?$/],

	// src/routes/treedemo/index.svelte
	[/^\/treedemo\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/apidemo/index.svelte
	[/^\/apidemo\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/apidemo/[lastName].svelte
	[/^\/apidemo\/([^/]+?)\/?$/, [c[0], c[16]], [c[1]], (m) => ({ lastName: d(m[1])})],

	// src/routes/counter/index.svelte
	[/^\/counter\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/dynamic/index.svelte
	[/^\/dynamic\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/pattern.svelte
	[/^\/pattern\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/tabdemo/index.svelte
	[/^\/tabdemo\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/wordle/index.svelte
	[/^\/wordle\/?$/, [c[0], c[21]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[22]], [c[1]]],

	// src/routes/test.svelte
	[/^\/test\/?$/, [c[0], c[23]], [c[1]]],

	// src/routes/api/index.js
	[/^\/api\/?$/],

	// src/routes/api/[lastName].js
	[/^\/api\/([^/]+?)\/?$/]
];

export const fallback = [c[0](), c[1]()];