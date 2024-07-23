let apiUrl = "https://openlibrary.org/search.json";

async function findBook(input) {
    const response = await fetch(apiUrl + input);

    if (response.status === 404) {
        // Add error message
    } else {
        let data = await response.json();
        let outputDiv = document.querySelector(".output");

        outputDiv.innerHTML += `Showing 10 of ${data.docs.length} results`;

        for (let i =  0; i < 10; i++) {
            let coverString = "https://covers.openlibrary.org/b/isbn/" + data.docs[i].isbn[0] + "-M.jpg";

            outputDiv.innerHTML += `
                <hr>
                <div class="book-container">
                    <img src="${coverString}">
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

