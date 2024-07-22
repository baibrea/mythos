//This is only for scrolling through the carousel (dont need)
// scrollContain.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContain.scrollLeft += evt.deltaY;
//   scrollContain.style.scrollBehavior = "auto";
// });

// document.addEventListener("DOMContentLoaded", function () {
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
    //  });

const searchInput = document.querySelector(".search input");

const searchButton = document.querySelector(".search-img");
const searchClose = document.querySelector(".close-img");
const searchContent = document.querySelector(".search");

if (searchButton) {
    searchButton.addEventListener("click", () => {
        searchContent.classList.add("show-search");
    })
}

if (searchClose) {
    searchClose.addEventListener("click", () => {
        searchContent.classList.remove("show-search");
        searchInput.innerHTML = "";
    })

    window.addEventListener("keydown", () => {
        if (event.keyCode === 27) {
            searchContent.classList.remove("show-search");
        }
    })
}