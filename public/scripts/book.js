// let bookInfo = window.location.search;

// console.log(bookInfo);

// export function passInfo(info) {
//   console.log("info received");
//   document.querySelector(".output") = info;
//   window.location.href='/book'
// }

let bookInfo = localStorage.getItem("searchItem");

console.log(bookApi);

document.querySelector(".output").innerHTML = bookInfo;

// window.onload = localStorage.getItem("searchItem", )
