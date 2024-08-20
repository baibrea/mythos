import { logout } from "./utils/firebase.js";

const welcomeMessage = document.querySelector(".content-container");
const signoutButton = document.querySelector(".sign-out");
let registeredName = localStorage.getItem('name');
let authPage = localStorage.getItem('authPage');
let loginName = localStorage.getItem('LoginName');

if(authPage === 'register' || authPage === 'login') {
  welcomeMessage.innerHTML = `
  <h2>Welcome to Mythos,</h2>
  <div class="profile-name">
    <h2>${registeredName}</h2>
  </div>`;
}
// else if(authPage === 'login') {
//   welcomeMessage.innerHTML = `
//   <h2>Welcome back to Mythos,</h2>
//   <div class="profile-name">
//     <h2>${loginName}</h2>
//   </div>`;
// }

signoutButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem('authPage');
  logout();
  window.location.href = "http://localhost:3000/login";
})