import { getAuthor, getWorkData, getDesc, getCover, getEditionData, getPageCount } from "./utils/api.js";

const editionKey = localStorage.getItem("editionKey");
const bookData = await getWorkData(editionKey);

let outputDiv = document.querySelector(".output");

outputDiv.innerHTML += `
    <img src="${getCover(bookData.covers[0])}">
    <h2>${bookData.title}</h2>
    <p>By ${await getAuthor(bookData)}</p>
    <hr>
    <p>${getDesc(bookData)}</p>
    <p>${await getPageCount(editionKey)} pages</p>
`
