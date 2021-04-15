import { writable } from 'svelte/store';

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