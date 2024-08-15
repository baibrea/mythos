// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwtAletq68c4IO_C2PWQtnAVTZvQ1wdAg",
  authDomain: "mythosproject-cb006.firebaseapp.com",
  projectId: "mythosproject-cb006",
  storageBucket: "mythosproject-cb006.appspot.com",
  messagingSenderId: "647274856764",
  appId: "1:647274856764:web:85162bebc9837813e11e39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// For profile name displaying in profile page



// Submit
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();

  // Inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // store name in localStorage
  let name = document.getElementById("name").value;
  localStorage.setItem('name', `${name}`);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    alert("Creating Account...");
    // Going to profile page after creating account
    window.location.href = "http://localhost:3000/profile"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
});





