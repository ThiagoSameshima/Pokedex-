function renderPokemonDetails(pokemon, species, evolution) {
    const table = document.getElementById("statsTable"); // essa é a referência
    if (!table) {
        console.error("statsTable não encontrada no DOM — confira se o modal já foi renderizado antes desta chamada.");
        return;
    }

    const rows = [
        ["Nome", pokemon.name],
        ["Altura", `${pokemon.height / 10} m`],
        ["Peso", `${pokemon.weight / 10} kg`],
        ["Tipos", pokemon.types.map(t => t.type.name).join(", ")],
        ...pokemon.stats.map(s => [s.stat.name, s.base_stat])
    ];

    table.innerHTML = rows
        .map(([label, value]) => `<tr><td>${label}</td><td>${value}</td></tr>`)
        .join("");
}