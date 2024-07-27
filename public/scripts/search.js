let apiUrl = "https://openlibrary.org/search.json";

function imgExists(url) {
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404) {
        return true;
    } else {
        return false;
    }
}

async function findBook(input) {
    const response = await fetch(apiUrl + input);

    if (response.status === 404) {
        // Add error message
    } else {
        let data = await response.json();
        let outputDiv = document.querySelector(".output");

        outputDiv.innerHTML += `Showing 10 of ${data.docs.length} results`;

        for (let i =  0; i < 10; i++) {
            let coverString = "https://covers.openlibrary.org/b/isbn/" + data.docs[i].isbn[0] + "-M.jpg?default=false";
            let coverSrc = "";

            if (imgExists(coverString)) {
                coverSrc = coverString;
            } else {
                coverSrc = "images/default-cover.png";
            }

            outputDiv.innerHTML += `
                <hr>
                <div class="book-container">
                    <img src="${coverSrc}">
                    <div class="desc-container">
                        <p class="book-title">${data.docs[i].title}</p>
                        <p class="book-author">by ${data.docs[i].author_name[0]}</p>
                    </div>
                </div>
            `
        }
    }
}

let searchInput = window.location.search;

findBook(searchInput);
console.log(apiUrl + searchInput);

