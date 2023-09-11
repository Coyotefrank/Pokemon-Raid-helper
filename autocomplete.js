
const inputEl = document.querySelector("#myInput");

inputEl.addEventListener("input", onInputChange);

let pokeNames = [];

async function getPokemonNames() {
  const pokeRes = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await pokeRes.json();

  pokeNames = data.results.map((pokemon) => {
    return pokemon.name;
  });
}

async function onInputChange() {
  const value = inputEl.value.toLowerCase(); 

  const filteredNames = [];

  pokeNames.forEach((pokeName) => {
    if (pokeName.substr(0, value.length).toLowerCase() === value) {
      filteredNames.push(pokeName);
    }
  });

  createAutocompleteDropdown(filteredNames);
}

function createAutocompleteDropdown(list) {
  const listEl = document.createElement("ul");
  listEl.className = "autocomplete-list";

  list.forEach((pokemon) => {
    const listItem = document.createElement("li"); 
    const pokemonButton = document.createElement("button");
    pokemonButton.innerHTML = pokemon;
    listItem.appendChild(pokemonButton);

    listEl.appendChild(listItem);
  });

  const autocompleteWrapper = document.querySelector("#autocomplete-wrapper");
  autocompleteWrapper.innerHTML = ""; // Clear previous content
  autocompleteWrapper.appendChild(listEl);
}

getPokemonNames();
