let searchBar = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");

searchButton.addEventListener("click", () => {
    getBook(searchBar.value);
})

searchBar.addEventListener("keydown", () => {
    if (event.keyCode === 13) {
        getBook(searchBar.value);
    }
})
