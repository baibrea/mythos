import { getAuthor, getWorkData, getDesc, getCover, getEditionData, getPageCount } from "./utils/api.js";

const editionKey = localStorage.getItem("editionKey");
const bookData = await getWorkData(editionKey);

let outputDiv = document.querySelector(".page-container");

outputDiv.innerHTML += `
    <div class="details-container">   
        <img class="book-cover" src="${getCover(bookData.covers[0])}">
        <div class="details-right">
            <h2 class="title">${bookData.title}</h2>
            <p class="author">By ${await getAuthor(bookData)}</p>
            <p class="page-count">${await getPageCount(editionKey)} pages</p>
        </div>
    </div>
    <hr class="info-divider"></div>
    <p>${getDesc(bookData)}</p>
`
