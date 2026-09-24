const modal = document.getElementById("modal");
 
async function openPokemon(id) {
    const pokemon = await getPokemon(id);
    const species = await getSpecies(pokemon.species.url);
    const evolution = await loadEvolutionImages(species);
 
    renderPokemonDetails(pokemon, species, evolution);
 
    modal.classList.remove("hidden");
}
 
function renderPokemonDetails(pokemon, species, evolution) {
    const container = document.getElementById("pokemonDetails");
    if (!container) {
        console.error("pokemonDetails não encontrado no DOM.");
        return;
    }
 
    const rows = [
        ["Nome", pokemon.name],
        ["Altura", `${pokemon.height / 10} m`],
        ["Peso", `${pokemon.weight / 10} kg`],
        ["Tipos", pokemon.types.map((t) => t.type.name).join(", ")],
        ...pokemon.stats.map((s) => [s.stat.name, s.base_stat])
    ];
 
    const tableRows = rows
        .map(([label, value]) => `<tr><td>${label}</td><td>${value}</td></tr>`)
        .join("");
 
    const evolutionHtml = evolution
        ? `<div id="evolutionChain">${evolution
              .map(
                  (e) =>
                      `<div class="evolution-item"><img src="${e.sprite}" alt="${e.name}"><span>${e.name}</span></div>`
              )
              .join("")}</div>`
        : "";
 
    container.innerHTML = `<table id="statsTable">${tableRows}</table>${evolutionHtml}`;
}
 
document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
});
 