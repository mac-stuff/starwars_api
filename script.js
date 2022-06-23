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

    const categories = [
      "index",
      "name",
      "height",
      "birth_year",
      "skin_color",
      "created",
    ];
    createHeader(categories);

    data.results.forEach((item, index) => {
      const person = new Person(
        index,
        item.name,
        item.height,
        item.birth_year,
        item.skin_color,
        item.created
      );
      createContent(categories, person, index);
    });
  }

  if (value === "planets") {
    cleanTable();

    const categories = [
      "index",
      "name",
      "orbital_period",
      "gravity",
      "population",
      "created",
    ];
    createHeader(categories);

    data.results.forEach((item, index) => {
      const planet = new Planet(
        index,
        item.name,
        item.orbital_period,
        item.gravity,
        item.population,
        item.created
      );
      createContent(categories, planet, index);
    });
  }

  if (value === "films") {
    cleanTable();
    const categories = [
      "index",
      "title",
      "director",
      "producer",
      "release_date",
      "created",
    ];
    createHeader(categories);

    data.results.forEach((item, index) => {
      const film = new Film(
        index,
        item.title,
        item.director,
        item.producer,
        item.release_date,
        item.created
      );
      createContent(categories, film, index);
    });
  }

  if (value === "species") {
    cleanTable();

    const categories = [
      "index",
      "name",
      "classification",
      "designation",
      "eye_colors",
      "created",
    ];
    createHeader(categories);

    data.results.forEach((item, index) => {
      const specie = new Specie(
        index,
        item.name,
        item.classification,
        item.designation,
        item.eye_colors,
        item.created
      );
      createContent(categories, specie, index);
    });
  }

  if (value === "vehicles") {
    cleanTable();

    const categories = [
      "index",
      "name",
      "model",
      "manufacturer",
      "length",
      "created",
    ];
    createHeader(categories);

    data.results.forEach((item, index) => {
      const vehicle = new Vehicle(
        index,
        item.name,
        item.model,
        item.manufacturer,
        item.length,
        item.created
      );
      createContent(categories, vehicle, index);
    });
  }

  if (value === "starships") {
    cleanTable();

    const categories = [
      "index",
      "name",
      "model",
      "manufacturer",
      "passengers",
      "created",
    ];
    createHeader(categories);

    data.results.forEach((item, index) => {
      const starship = new Starship(
        index,
        item.name,
        item.model,
        item.manufacturer,
        item.passengers,
        item.created
      );
      createContent(categories, starship, index);
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
  const th = document.createElement("th");
  th.setAttribute("class", "th");
  th.innerHTML = "";
  tr.appendChild(th);
  table.appendChild(tr);
}

function createContent(categories, object, index) {
  const table = document.getElementById("table-content");
  const tr = document.createElement("tr");
  tr.setAttribute("id", `tr-${index}`);
  for (let i = 0; i < categories.length; i++) {
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

  document.querySelector(".table").addEventListener("click", (e) => {
    const contentToDelete = document.getElementById(e.target.parentElement.id);
    contentToDelete.style.display = "none";
  });
}

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
