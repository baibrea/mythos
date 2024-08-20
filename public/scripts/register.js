import { register } from "./utils/firebase.js";

// Register
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  register(event);
});





