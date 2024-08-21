import { register, addProfile } from "./utils/firebase.js";

// Register
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  addProfile(event);
  register(event);

});
