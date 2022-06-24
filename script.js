window.onload = init;

function init() {
  createButtons();
}

async function createButtons() {
  const result = await fetch(`https://swapi.dev/api/`);
  const data = await result.json();

  const buttons = document.getElementById("buttons");
  Object.entries(data).map(([key, value]) => {
    const button = document.createElement("button");
    button.setAttribute("class", "button-52");
    button.innerHTML = key;
    buttons.appendChild(button);
  });

  document.querySelector("#buttons").addEventListener("click", (e) => {
    displayResults(e.target.textContent.trim().toLowerCase());
  });
}

async function displayResults(value) {
  const result = await fetch(`https://swapi.dev/api/${value}/`);
  const data = await result.json();
  console.log(data);

  if (value === "people") {
    cleanTable();
    createHeader(categories.people);

    data.results.forEach((item, index) => {
      const person = new Person(
        index + 1,
        item.name,
        item.height,
        item.birth_year,
        item.skin_color,
        item.created
      );
      createContent(categories.people, person, index);
    });
  }

  if (value === "planets") {
    cleanTable();
    createHeader(categories.planets);

    data.results.forEach((item, index) => {
      const planet = new Planet(
        index + 1,
        item.name,
        item.orbital_period,
        item.gravity,
        item.population,
        item.created
      );
      createContent(categories.planets, planet, index);
    });
  }

  if (value === "films") {
    cleanTable();
    createHeader(categories.films);

    data.results.forEach((item, index) => {
      const film = new Film(
        index + 1,
        item.title,
        item.director,
        item.producer,
        item.release_date,
        item.created
      );
      createContent(categories.films, film, index);
    });
  }

  if (value === "species") {
    cleanTable();
    createHeader(categories.species);

    data.results.forEach((item, index) => {
      const specie = new Specie(
        index + 1,
        item.name,
        item.classification,
        item.designation,
        item.eye_colors,
        item.created
      );
      createContent(categories.species, specie, index);
    });
  }

  if (value === "vehicles") {
    cleanTable();
    createHeader(categories.vehicles);

    data.results.forEach((item, index) => {
      const vehicle = new Vehicle(
        index + 1,
        item.name,
        item.model,
        item.manufacturer,
        item.length,
        item.created
      );
      createContent(categories.vehicles, vehicle, index);
    });
  }

  if (value === "starships") {
    cleanTable();
    createHeader(categories.starships);

    data.results.forEach((item, index) => {
      const starship = new Starship(
        index + 1,
        item.name,
        item.model,
        item.manufacturer,
        item.passengers,
        item.created
      );
      createContent(categories.starships, starship, index);
    });
  }
}

function createHeader(categories) {
  const table = document.getElementById("table-content");
  const tr = document.createElement("tr");
  for (const category of categories) {
    const th = document.createElement("th");
    th.setAttribute("class", "th");
    th.innerHTML = category;
    tr.appendChild(th);
  }
  table.appendChild(tr);
}

function createContent(categories, object, index) {
  const table = document.getElementById("table-content");
  const tr = document.createElement("tr");
  tr.setAttribute("id", `tr-${index}`);
  for (let i = 0; i < categories.length - 1; i++) {
    const td = document.createElement("td");
    td.setAttribute("class", "td");
    td.innerHTML = object[categories[i]];
    tr.appendChild(td);
  }
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete-button");
  deleteButton.innerHTML = "delete";
  tr.appendChild(deleteButton);
  table.appendChild(tr);
}

document.querySelector(".table").addEventListener("click", (e) => {
  const contentToHide = document.getElementById(e.target.parentElement.id);
  contentToHide.style.display = "none";
});

document.querySelector("#button-prev").addEventListener("click", (e) => {
  for (let i = 0; i < 5; i++) {
    if (i < 5) {
      const contentToHide = document.getElementById(`tr-${i}`);
      contentToHide.style.display = "";
    } else {
      try {
        const contentToHide = document.getElementById(`tr-${i}`);
        contentToHide.style.display = "none";
      } catch (error) {}
    }
  }
});

document.querySelector("#button-next").addEventListener("click", (e) => {
  for (let i = 0; i < 10; i++) {
    if (i < 5) {
      const contentToHide = document.getElementById(`tr-${i}`);
      contentToHide.style.display = "none";
    } else {
      try {
        const contentToHide = document.getElementById(`tr-${i}`);
        contentToHide.style.display = "";
      } catch (error) {}
    }
  }
});

function cleanTable() {
  document.getElementById("table-content").innerHTML = "";
}

class Base {
  constructor(created) {
    this.created = created.substring(0, 10).split("-").reverse().join("-");
  }
}

class Person extends Base {
  constructor(index, name, height, birth_year, skin_color, created) {
    super(created);
    this.index = index;
    this.name = name;
    this.height = height;
    this.birth_year = birth_year;
    this.skin_color = skin_color;
  }
}

class Planet extends Base {
  constructor(index, name, orbital_period, gravity, population, created) {
    super(created);
    this.index = index;
    this.name = name;
    this.orbital_period = orbital_period;
    this.gravity = gravity;
    this.population = population;
  }
}

class Film extends Base {
  constructor(index, title, director, producer, release_date, created) {
    super(created);
    this.index = index;
    this.title = title;
    this.director = director;
    this.producer = producer;
    this.release_date = release_date;
  }
}

class Specie extends Base {
  constructor(index, name, classification, designation, eye_colors, created) {
    super(created);
    this.index = index;
    this.name = name;
    this.classification = classification;
    this.designation = designation;
    this.eye_colors = eye_colors;
  }
}

class Starship extends Base {
  constructor(index, name, model, manufacturer, passengers, created) {
    super(created);
    this.index = index;
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.passengers = passengers;
  }
}

class Vehicle extends Base {
  constructor(index, name, model, manufacturer, length, created) {
    super(created);
    this.index = index;
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.length;
  }
}

const categories = {
  people: [
    "index",
    "name",
    "height",
    "birth_year",
    "skin_color",
    "created",
    "",
  ],
  planets: [
    "index",
    "name",
    "orbital_period",
    "gravity",
    "population",
    "created",
    "",
  ],
  films: [
    "index",
    "title",
    "director",
    "producer",
    "release_date",
    "created",
    "",
  ],
  species: [
    "index",
    "name",
    "classification",
    "designation",
    "eye_colors",
    "created",
    "",
  ],
  vehicles: ["index", "name", "model", "manufacturer", "length", "created", ""],
  starships: [
    "index",
    "name",
    "model",
    "manufacturer",
    "passengers",
    "created",
    "",
  ],
};
