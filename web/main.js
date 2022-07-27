import './style.css'

let pokemonElement = ``;

const pokemonSection = document.getElementById('pokemon');

const getPokemon = async() => {
  const res = await fetch('http://localhost:9001/pokemons');
  const data = await res.json();
  return data;
};

getPokemon().then(pokemons => {
  pokemons.map(pokemon => {
    pokemonElement += `<div id="pokemon-card"><div id="pokemon-thumbnail"><img src="${pokemon.ThumbnailImage}" alt="${pokemon.name}"></div><div id="pokemon-details"><div id="pokemon-name">${pokemon.name}</div><div id="pokemon-type">${pokemon.type}</div></div></div>`;
  })
});

pokemonSection.insertAdjacentHTML('beforeend', pokemonElement); 



