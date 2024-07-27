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