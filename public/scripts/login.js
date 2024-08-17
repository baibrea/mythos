import { login } from "./utils/firebase.js";

// Login
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  login(event);
});





