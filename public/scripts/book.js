import { getWork } from "./utils/api.js";

const editionKey = localStorage.getItem("editionKey");
const bookData = await getWork(editionKey);

let outputDiv = document.querySelector(".output");

outputDiv.innerHTML += `
    <h2>${bookData.title}</h2>
    <p>${bookData.author_name}</p>
    <p>${bookData.description.value}</p>
`
