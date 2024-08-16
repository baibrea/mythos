import { login } from "./utils/firebase.js";

// For profile name displaying in profile page

// Login
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  login(event);
});





