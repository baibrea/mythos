import { getBook } from "./utils/api.js";

const editionKey = localStorage.getItem("editionKey");
const bookData = await getBook(editionKey);

let outputDiv = document.querySelector(".output");
outputDiv.innerHTML += editionKey;
outputDiv.innerHTML += ` ${bookData.title}`;
