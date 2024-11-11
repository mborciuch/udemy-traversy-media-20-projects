const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const input = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
})