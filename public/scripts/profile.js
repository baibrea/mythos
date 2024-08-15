const profileName = document.querySelector(".profile-name");
let theName = localStorage.getItem('name');
profileName.innerHTML = `<h2>${theName}</h2>`;