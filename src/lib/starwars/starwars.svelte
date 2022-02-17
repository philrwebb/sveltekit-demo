<script>
    import { people, ships, planets, vehicles, species, films } from "./store.js";
  
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        people.update((n) => (n = data));
        console.log($people);
      });
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => {
        ships.update((n) => (n = data));
        console.log($ships);
      });
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        planets.update((n) => (n = data));
        console.log($planets);
      });
      fetch("https://swapi.dev/api/vehicles/")
      .then((response) => response.json())
      .then((data) => {
        vehicles.update((n) => (n = data));
        console.log($vehicles);
      });
      fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        films.update((n) => (n = data));
        console.log($films);
      });
      fetch("https://swapi.dev/api/species/")
      .then((response) => response.json())
      .then((data) => {
        species.update((n) => (n = data));
        console.log($species);
      });		
  </script>

  <div></div>
  