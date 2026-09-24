document
.getElementById(
"btnSearch"
)
.addEventListener(
"click",
searchPokemon
);
async function searchPokemon(){

    const value =
    document
    .getElementById(
        "searchInput"
    )
    .value
    .toLowerCase();

    if(!value) return;

    const pokemon =
    await getPokemon(
        value
    );

    openPokemon(
        pokemon.id
    );
}
document
.getElementById(
"searchInput"
)
.addEventListener(
"keypress",
e=>{

if(
e.key==="Enter"
){
    searchPokemon();
}

});
