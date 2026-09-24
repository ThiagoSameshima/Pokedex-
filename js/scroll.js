let isLoading = false;

window.addEventListener("scroll", async () => {

    if (isLoading) return;

    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
    ) {
        isLoading = true;
        await loadPokemons();
        isLoading = false;
    }

});
