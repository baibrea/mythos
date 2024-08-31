import { logout, deleteProfile, getUser } from "./utils/firebase.js";

const welcomeMessage = document.querySelector(".content-container");
const signoutButton = document.querySelector(".sign-out");
let registeredName = localStorage.getItem('name');
let authPage = localStorage.getItem('authPage');
// let loginName = localStorage.getItem('LoginName');


//Get the current User's information 
const myData = await getUser();
console.log(myData);
const myUsername = myData.username;

// Get the delete account button
const deleteAccountButton = document.querySelector(".delete-account-btn");

if(authPage === 'register' || authPage === 'login') {
  welcomeMessage.innerHTML = `
  <h2>Welcome to Mythos,</h2>
  <div class="profile-name">
    <h2>${myUsername}</h2>
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
  // localStorage.removeItem('authPage');
  logout();
  alert("Signing out...");
  window.location.href = "http://localhost:3000/login";
})


deleteAccountButton.addEventListener("click", (e) => {
  e.preventDefault();

  // This will delete what the current profile is...
  deleteProfile(myData.email);
  alert("Deleting Account...");
  logout();
  window.location.href = "http://localhost:3000/login";
})