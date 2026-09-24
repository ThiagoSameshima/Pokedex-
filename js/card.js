function createCard(pokemon){

    const card =
    document.createElement("div");

    card.classList.add(
        "card",
        `type-${pokemon.types[0].type.name}`
    );

    card.innerHTML = `
    
        <h3>
            #${pokemon.id}
        </h3>

        <img
            src="${pokemon.sprites.other['official-artwork'].front_default}"
            alt="${pokemon.name}"
        />

        <h2>
            ${pokemon.name}
        </h2>

        <button
            onclick="openPokemon(${pokemon.id})">
            Ver detalhes
        </button>

    `;

    return card;
}
