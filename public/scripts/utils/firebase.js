// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, getDoc, getDocs, collection, addDoc, setDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { changeAccButton } from "../header.js";
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


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
let userData = "TImsim";


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email);
    changeAccButton(1);
    const profileDataCollection = collection(db, 'user-data');
    getDocs(profileDataCollection).then(snapshot => {
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        if(user.email === data.email) {
          userData = doc.data();
          console.log(data);
          console.log(doc.data().email);
          console.log(data.username);
          console.log(data.password);

        }
        // console.log(data.email);
      });
    })
    .catch(err => {
      console.log(err.message);
    });    
  } else {
    changeAccButton(0);
  }
})

export function login(event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // store name in localStorage
  let registeredName = localStorage.getItem(`${email}`);
  localStorage.setItem('LoginName', `${registeredName}`);
  localStorage.setItem('authPage', 'login');

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredentials) => {
    // Signed up
    const user = userCredentials.user;

    console.log(user);
    console.log(user.email);
    alert("Logging in...");
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
}

export function register(event) {
  event.preventDefault();

  // Inputs
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // store name in localStorage
  localStorage.setItem('name', `${username}`);
  localStorage.setItem('authPage', 'register');
  // Storing name in local storage tied to email
  localStorage.setItem(`${email}`, `${username}`);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredentials) => {
    // Signed up
    const user = userCredentials.user;

    console.log(user);
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
}

export function logout() {
  auth.signOut().then(() => {
    alert('Signing out...');
  });
}

export function addProfile() {
  const myUsername = document.getElementById("username").value;
  const myEmail = document.getElementById("email").value;
  const myPassword = document.getElementById("password").value;

  setDoc(doc(db, "user-data", myEmail), {
    username: myUsername,
    email: myEmail,
    password: myPassword,
  })
}

export async function getUser() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const profileDataCollection = collection(db, 'user-data');
        try {
          const snapshot = await getDocs(profileDataCollection);
          let userData = null;
          snapshot.docs.forEach((doc) => {
            const data = doc.data();
            if (user.email === data.email) {
              userData = data;
            }
          });
          resolve(userData);
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(null);
      }
    });
  });
}


export function deleteProfile(userid) {

  getDocs(profileDataCollection).then(snapshot => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
    })
  })
  const  docRef = doc(db, 'user-data', userid);

  deleteDoc(docRef).then(() => {
    profileToDelete.reset();
  })
}
