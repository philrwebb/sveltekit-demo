import { writable } from 'svelte/store'

export const people = writable({ header: [], rows: [], next: "", previous: "", fulldata: {} })
export const ships = writable({ header: [], rows: [], next: "", previous: "", fulldata: {}  })
export const planets = writable({ header: [], rows: [], next: "", previous: "", fulldata: {}  })
export const vehicles = writable({ header: [], rows: [], next: "", previous: "", fulldata: {}  })
export const films = writable({ header: [], rows: [], next: "", previous: "", fulldata: {}  })
export const species = writable({ header: [], rows: [], next: "", previous: "", fulldata: {}  })

