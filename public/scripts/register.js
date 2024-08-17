import { register } from "./utils/firebase";

// Register
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  register(event);
});





