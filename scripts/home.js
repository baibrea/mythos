let apiUrl = "https://openlibrary.org/search.json?q=red+rising";

async function getBook(input) {
    const response = await fetch(apiUrl);

    if (response.status === 404) {
        // add error message to HTML?
    } else {
        let data = await response.json();

        document.querySelector(".book-info").innerHTML += `
            <p>${data.docs[0].title}</p>
            <p>${data.docs[0].author_name[0]}</p>
        `
    }
}

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
