import { getCover, getSearchResults } from "./utils/api.js";

let apiUrl = "https://openlibrary.org/search.json";

function passKey(editionKey) {
    window.location.href = `http://localhost:3000/book/?q=${editionKey}`;
    localStorage.setItem("editionKey", editionKey);
}

async function listBooks(input) {
    let outputDiv = document.querySelector(".output");
    let data = await getSearchResults(input);

    if (data.docs.length < 10) {
        outputDiv.innerHTML += `Showing ${data.docs.length} of ${data.docs.length} results`
    } else {
        outputDiv.innerHTML += `Showing 10 of ${data.docs.length} results`;
    }

    for (let i =  0; i < 6; i++) {

        outputDiv.innerHTML += `
            <hr>    
            <a href="#" class="book-container" name="${data.docs[i].edition_key[0]}">
                <img src="${getCover(data.docs[i].cover_i)}">
                <div class="desc-container">
                    <p class="book-title">${data.docs[i].title}</p>
                    <p class="book-author">by ${data.docs[i].author_name[0]}</p>
                </div>
            </a>
        `
    }
    let bookContainers = document.getElementsByClassName("book-container");

    for (let i = 0; i < bookContainers.length; i++) {
        bookContainers[i].addEventListener("click", () => {
            passKey(bookContainers[i].getAttribute("name"));
        })
    }

}

let searchInput = window.location.search;

listBooks(searchInput);
console.log(apiUrl + searchInput);

