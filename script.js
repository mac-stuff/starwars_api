async function asyncFetch(value) {
  const result = await fetch(`https://swapi.dev/api/${value}/`);
  const data = await result.json();
  displayResults(data, value);
}

document.querySelector("#buttons").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});

function displayResults(data, value) {
  console.log(data);
  let output = ``;

  if (value === "films") {
    output += `
    <tr>
      <th>index</th>
      <th>title</th>
      <th>director</th>
      <th>producer</th>
      <th>release_date</th>
    </tr>`;
    data.results.forEach((item, index) => {
      const film = new Film(
        index,
        item.title,
        item.director,
        item.producer,
        item.release_date
      );
      output += `
      <tr>
        <td>${film.index + 1}</td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td>${film.producer}</td>
        <td>${film.release_date}</td>
      </tr>`;
    });
  }

  if (value === "people") {
    output += `
    <tr>
      <th>index</th>
      <th>name</th>
      <th>height</th>
      <th>birth year</th>
      <th>skin color</th>
    </tr>`;
    data.results.forEach((item, index) => {
      const person = new Person(
        index,
        item.name,
        item.height,
        item.birth_year,
        item.skin_color
      );
      output += `
    <tr>
      <td>${person.index + 1}</td>
      <td>${person.name}</td>
      <td>${person.height}</td>
      <td>${person.birth_year}</td>
      <td>${person.skin_color}</td>
    </tr>`;
    });
  }

  if (value === "planets") {
    output += `
    <tr>
      <th>index</th>
      <th>name</th>
      <th>orbital period</th>
      <th>gravity</th>
      <th>population</th>
    </tr>`;
    data.results.forEach((item, index) => {
      const planet = new Planet(
        index,
        item.name,
        item.orbital_period,
        item.gravity,
        item.population
      );
      output += `
      <tr>
        <td>${planet.index + 1}</td>
        <td>${planet.name}</td>
        <td>${planet.orbital_period}</td>
        <td>${planet.gravity}</td>
        <td>${planet.population}</td>
      </tr>`;
    });
  }

  if (value === "species") {
    output += `
    <tr>
      <th>index</th>
      <th>name</th>
      <th>classification</th>
      <th>designation</th>
      <th>eye colors</th>
    </tr>`;
    data.results.forEach((item, index) => {
      const specie = new Specie(
        index,
        item.name,
        item.classification,
        item.designation,
        item.eye_colors
      );
      output += `
      <tr>
        <td>${specie.index + 1}</td>
        <td>${specie.name}</td>
        <td>${specie.classification}</td>
        <td>${specie.designation}</td>
        <td>${specie.eye_colors}</td>
      </tr>`;
    });
  }

  if (value === "starships") {
    output += `
    <tr>
      <th>index</th>
      <th>name</th>
      <th>model</th>
      <th>manufacturer</th>
      <th>passengers</th>
    </tr>`;
    data.results.forEach((item, index) => {
      const starship = new Starship(
        index,
        item.name,
        item.model,
        item.manufacturer,
        item.passengers
      );
      output += `
      <tr>
        <td>${starship.index + 1}</td>
        <td>${starship.name}</td>
        <td>${starship.model}</td>
        <td>${starship.manufacturer}</td>
        <td>${starship.passengers}</td>
      </tr>`;
    });
  }

  if (value === "vehicles") {
    output += `
    <tr>
      <th>index</th>
      <th>name</th>
      <th>model</th>
      <th>manufacturer</th>
      <th>cost_in_credits</th>
    </tr>`;
    data.results.forEach((item, index) => {
      const vehicle = new Vehicle(
        index,
        item.name,
        item.model,
        item.manufacturer,
        item.cost_in_credits
      );
      output += `
    <tr>
      <td>${vehicle.index + 1}</td>
      <td>${vehicle.name}</td>
      <td>${vehicle.model}</td>
      <td>${vehicle.manufacturer}</td>
      <td>${vehicle.cost_in_credits}</td>
    </tr>
      `;
    });
  }
  results.innerHTML = output;
}

class Film {
  constructor(index, title, director, producer, release_date) {
    this.index = index;
    this.title = title;
    this.director = director;
    this.producer = producer;
    this.release_date = release_date;
  }
}

class Person {
  constructor(index, name, height, birth_year, skin_color) {
    this.index = index;
    this.name = name;
    this.height = height;
    this.birth_year = birth_year;
    this.skin_color = skin_color;
  }
}

class Planet {
  constructor(index, name, orbital_period, gravity, population) {
    this.index = index;
    this.name = name;
    this.orbital_period = orbital_period;
    this.gravity = gravity;
    this.population = population;
  }
}

class Specie {
  constructor(index, name, classification, designation, eye_colors) {
    this.index = index;
    this.name = name;
    this.classification = classification;
    this.designation = designation;
    this.eye_colors = eye_colors;
  }
}

class Starship {
  constructor(index, name, model, manufacturer, passengers) {
    this.index = index;
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.passengers = passengers;
  }
}

class Vehicle {
  constructor(index, name, model, manufacturer, cost_in_credits) {
    this.index = index;
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.cost_in_credits;
  }
}
