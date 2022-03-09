import { writable } from 'svelte/store'

export const people = writable({
  header: [],
  rows: [],
  next: '',
  previous: '',
  fulldata: {},
})
export const ships = writable({
  header: [],
  rows: [],
  next: '',
  previous: '',
  fulldata: {},
})
export const planets = writable({
  header: [],
  rows: [],
  next: '',
  previous: '',
  fulldata: {},
})
export const vehicles = writable({
  header: [],
  rows: [],
  next: '',
  previous: '',
  fulldata: {},
})
export const films = writable({
  header: [],
  rows: [],
  next: '',
  previous: '',
  fulldata: {},
})
export const species = writable({
  header: [],
  rows: [],
  next: '',
  previous: '',
  fulldata: {},
})
function removeLastComma(strng) {
  var n = strng.lastIndexOf(',')
  if (n > 0) {
    return strng.substring(0, n)
  }
  return strng
}
export const peopleLoad = (data) => {
  let test = {}

  people.update(() => {
    let rows = data.results.map((person) => {
      let ary = []
      ary.push(person.name)
      ary.push(person.height)
      ary.push(person.mass)
      ary.push(person.skin_color)
      ary.push(person.hair_color)
      return ary
    })
    let header = ['name', 'height', 'mass', 'skin_color', 'hair_color']
    let next = data.next
    let previous = data.previous
    return {
      header,
      rows,
      next,
      previous,
      fulldata: data,
    }
  })
}
export const shipsLoad = (data) => {
  ships.update(() => {
    let rows = data.results.map((ship) => {
      let ary = []
      ary.push(ship.name)
      ary.push(ship.model)
      ary.push(ship.starship_class)
      return ary
    })
    let header = ['name', 'model', 'starship_class']
    return {
      header,
      rows,
      next: data.next,
      previous: data.previous,
      fulldata: data,
    }
  })
}
export const planetsLoad = (data) => {
  planets.update(() => {
    let rows = data.results.map((planet) => {
      let ary = []
      ary.push(planet.name)
      ary.push(planet.rotation_period)
      ary.push(planet.diameter)
      ary.push(planet.climate)
      ary.push(planet.terrain)
      return ary
    })
    let header = ['name', 'rotation_period', 'diameter', 'climate', 'terrain']
    return {
      header,
      rows,
      next: data.next,
      previous: data.previous,
      fulldata: data,
    }
  })
}
export const vehiclesLoad = (data) => {
  vehicles.update(() => {
    let rows = data.results.map((vehicle) => {
      let ary = []
      ary.push(vehicle.name)
      ary.push(vehicle.model)
      ary.push(vehicle.vehicle_class)
      return ary
    })
    let header = ['name', 'model', 'vehicle_class']
    return {
      header,
      rows,
      next: data.next,
      previous: data.previous,
      fulldata: data,
    }
  })
}
export const filmsLoad = (data) => {
  films.update(() => {
    let rows = data.results.map((film) => {
      let ary = []
      ary.push(film.title)
      ary.push(film.episode_id)
      ary.push(film.opening_crawl)
      return ary
    })
    let header = ['title', 'episode_id', 'opening_crawl']
    return {
      header,
      rows,
      next: data.next,
      previous: data.previous,
      fulldata: data,
    }
  })
}
export const speciesLoad = (data) => {
  species.update(() => {
    let rows = data.results.map((specie) => {
      let ary = []
      ary.push(specie.name)
      ary.push(specie.classification)
      ary.push(specie.designation)
      ary.push(specie.average_height)
      ary.push(specie.language)
      return ary
    })
    let header = [
      'name',
      'classification',
      'designation',
      'average_height',
      'language',
    ]
    return {
      header,
      rows,
      next: data.next,
      previous: data.previous,
      fulldata: data,
    }
  })
}
export const getPage = (url) => {
  fetch(removeLastComma(url))
    .then((response) => response.json())
    .then((data) => {
      if (url.indexOf('people') !== -1) {
        peopleLoad(data)
      } else if (url.indexOf('starships') !== -1) {
        shipsLoad(data)
      } else if (url.indexOf('planets') !== -1) {
        planetsLoad(data)
      } else if (url.indexOf('vehicles') !== -1) {
        vehiclesLoad(data)
      } else if (url.indexOf('films') !== -1) {
        filmsLoad(data)
      } else if (url.indexOf('species') !== -1) {
        speciesLoad(data)
      }
    })
}
export const loadAll = () => {
  fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((data) => {
      peopleLoad(data)
    })
  fetch('https://swapi.dev/api/starships/')
    .then((response) => response.json())
    .then((data) => {
      shipsLoad(data)
    })
  fetch('https://swapi.dev/api/planets/')
    .then((response) => response.json())
    .then((data) => {
      planetsLoad(data)
    })
  fetch('https://swapi.dev/api/vehicles/')
    .then((response) => response.json())
    .then((data) => {
      vehiclesLoad(data)
    })
  fetch('https://swapi.dev/api/films/')
    .then((response) => response.json())
    .then((data) => {
      filmsLoad(data)
    })
  fetch('https://swapi.dev/api/species/')
    .then((response) => response.json())
    .then((data) => {
      speciesLoad(data)
    })
}
