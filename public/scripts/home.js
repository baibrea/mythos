import { getUser } from "./utils/firebase.js";

let scrollContainers = document.querySelectorAll(".book-gallery");
let leftButtons = document.querySelectorAll(".leftB");
let rightButtons = document.querySelectorAll(".rightB");

leftButtons.forEach((leftButton, i) => {
    leftButton.addEventListener("click", () => {
    let scrollCont = scrollContainers[i];
    scrollCont.style.scrollBehavior = "smooth";
    scrollCont.scrollLeft -= 1350;
    });
});

rightButtons.forEach((rightButton, i) => {
    rightButton.addEventListener("click", () => {
    let scrollCont = scrollContainers[i];
    scrollCont.style.scrollBehavior = "smooth";
    scrollCont.scrollLeft += 1350;
    });
});

const bookInfo = document.querySelector(".book-info");


const myData = await getUser();
console.log(myData);
bookInfo.innerHTML =  myData.username;