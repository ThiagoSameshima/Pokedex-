// Depende de getEvolution() e getPokemon(), definidas em api.js
// Certifique-se de que api.js é carregado ANTES deste arquivo no HTML.
 
async function loadEvolutionImages(species) {
    const chain = await getEvolution(species.evolution_chain.url);
 
    // Percorre a cadeia de evolução coletando os nomes em ordem
    const names = [];
    let node = chain.chain;
    while (node) {
        names.push(node.species.name);
        node = node.evolves_to[0];
    }
 
    // Busca os detalhes (incluindo sprite) de cada estágio da evolução
    const pokemons = await Promise.all(
        names.map((name) => getPokemon(name))
    );
 
    return pokemons.map((p) => ({
        name: p.name,
        sprite: p.sprites.front_default
    }));
}