
let apiUrl = "https://openlibrary.org/search.json";

async function findBook(input) {
    const response = await fetch(apiUrl + input);

    if (response.status === 404) {
        // Add error message
    } else {
        let data = await response.json();
        let outputDiv = document.querySelector(".output");

        for (let i =  0; i < 10; i++) {
            let coverString = "https://covers.openlibrary.org/b/isbn/" + data.docs[i].isbn[0] + "-M.jpg";

            outputDiv.innerHTML += `
                <h2>${data.docs[i].title}</h2>
                <p>${data.docs[i].author_name[0]}</p>
                <img src="${coverString}">
                <hr>
            `
        }
    }
}

let searchInput = window.location.search;

findBook(searchInput);
console.log(apiUrl + searchInput);

