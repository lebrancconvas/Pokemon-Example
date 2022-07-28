import './style.css'

let pokemonSection = document.getElementById('pokemon');

const getPokemon = async() => {
  try {
    const record = undefined;
    const res = await fetch(`http://localhost:9001/pokemons`, {headers: {'Content-Type': 'application/json'}});
    const data = await res.json();
    return data;
  } catch(err) {
    console.error(err);
    console.log('[FAILURE] Fetch Data Failed.'); 
  }
};

getPokemon().then(pokemons => {
  pokemons.map(pokemon => {
    let pokemonElement = `
      <div id="pokemon-card">
        <div id="pokemon-thumbnail">
          <img src="${pokemon.ThumbnailImage}" alt="${pokemon.name}" />
        </div>
        <div id="pokemon-details">
          <div id="pokemon-number">
            ${pokemon.number} 
          </div>
          <div id="pokemon-name">
            ${pokemon.name} 
          </div>
          <div id="pokemon-type">
            ${pokemon.type}
          </div>
        </div>
      </div>
    
    \n`;
    pokemonSection.insertAdjacentHTML('beforeend', pokemonElement);
  })
}).catch(err => {
  console.error(err);
  console.log('[FAILURE] Get Pokemon Element Failed.'); 
})





