import { writable } from 'svelte/store';
import http from './httpStore.js';

export const count = writable(0);

export const treevalue = writable(
    {
        label: "USA",
        children: [
            {
                label: "Florida",
                children: [
                    { label: "Jacksonville", children: [{ label: "WalMart" },] },
                    {
                        label: "Orlando",
                        children: [
                            { label: "Disney World" },
                            { label: "Universal Studio" },
                            { label: "Sea World" },
                        ],
                    },
                    { label: "Miami" },
                ],
            },
            {
                label: "California",
                children: [
                    { label: "San Francisco" },
                    { label: "Los Angeles" },
                    { label: "Sacramento" },
                ],
            },
        ],
    }
);

export const selectedNode = writable(
    {
        label: "non selected",
        children: []
    },
)

export const rowsdata = writable(
    [
        ["oranges", "lemons ", "pears  ", "apples ", "melons"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
        ["hello  ", "goodbye", "ciao   ", "whatsup", "ooroo"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
        ["hello  ", "goodbye", "ciao   ", "whatsup", "ooroo"],
        ["oranges", "lemons ", "pears  ", "apples ", "melons"],
        ["oranges", "lemons ", "pears  ", "apples ", "melons"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
        ["hello  ", "goodbye", "ciao   ", "whatsup", "ooroo"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
        ["hello  ", "goodbye", "ciao   ", "whatsup", "ooroo"],
        ["oranges", "lemons ", "pears  ", "apples ", "melons"],
        ["oranges", "lemons ", "pears  ", "apples ", "melons"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
        ["hello  ", "goodbye", "ciao   ", "whatsup", "ooroo"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
        ["hello  ", "goodbye", "ciao   ", "whatsup", "ooroo"],
        ["oranges", "lemons ", "pears  ", "apples ", "melons"],
        ["oranges", "lemons ", "pears  ", "apples ", "melons"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
        ["hello  ", "goodbye", "ciao   ", "whatsup", "ooroo"],
        ["black  ", "white  ", "yellow ", "orange ", "pink"],
        ["hello  ", "goodbye", "ciao   ", "whatsup", "ooroo"],
        ["oranges", "lemons ", "pears  ", "apples ", "melons"],
    ]
)

// create store and set initial value
export const covidSummary = http({});

// any component can subscribe to changes
covidSummary.subscribe($covidSummary => console.log('Cart was updated: ', $covidSummary))

// issue HTTP GET to refresh summary
covidSummary.get('https://api.covid19api.com/summary')
// prints: Cart was updated: ...