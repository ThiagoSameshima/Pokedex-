const darkModeBtn = document.getElementById("darkMode");

// Lembra a preferência do usuário entre visitas
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );
});
