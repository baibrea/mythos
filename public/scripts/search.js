import { getCover } from "./utils/api.js";

let apiUrl = "https://openlibrary.org/search.json";

function passKey(editionKey) {
    window.location.href = `http://localhost:3000/book/?q=${editionKey}`;
    localStorage.setItem("editionKey", editionKey);
}

async function listBooks(input) {
    const response = await fetch(apiUrl + input);

    if (response.status === 404) {
        // Add error message
    } else {
        const data = await response.json();
        let outputDiv = document.querySelector(".output");

        if (data.docs.length < 10) {
            outputDiv.innerHTML += `Showing ${data.docs.length} of ${data.docs.length} results`
        } else {
            outputDiv.innerHTML += `Showing 10 of ${data.docs.length} results`;
        }

        for (let i =  0; i < 2; i++) {

            const coverSrc = getCover(data.docs[i].isbn[0]);
            console.log(data.docs[i].isbn[0])

            outputDiv.innerHTML += `
                <hr>    
                <a href="#" class="book-container" name="${data.docs[i].edition_key[i]}">
                    <img src="${coverSrc}">
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
}

let searchInput = window.location.search;

listBooks(searchInput);
console.log(apiUrl + searchInput);

