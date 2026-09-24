const API = "https://pokeapi.co/api/v2/pokemon";
 
let offset = 0;
const limit = 22;
 
async function getPokemons() {
    const response = await fetch(`${API}?limit=${limit}&offset=${offset}`);
    return await response.json();
}
 
async function getPokemon(id) {
    const response = await fetch(`${API}/${id}`);
    return await response.json();
}
 
async function getSpecies(url) {
    const response = await fetch(url);
    return await response.json();
}
 
async function getEvolution(url) {
    const response = await fetch(url);
    return await response.json();
}