async function loadPokemons(){

    const data =
    await getPokemons();

    for(
        const pokemon
        of data.results
    ){

        const details =
        await getPokemon(
            pokemon.name
        );

        document
        .querySelector(
            "#pokemonContainer"
        )
        .appendChild(
            createCard(details)
        );
    }

    offset += limit;
}
loadPokemons();