import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  child,
  get
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// import  google accounts


const firebaseConfig = {
  apiKey: "AIzaSyDLfTgcPl-khsdlL5x6hKWlRSMcTIjOhS0",
  authDomain: "hqpacademy.firebaseapp.com",
  databaseURL: "https://hqpacademy-default-rtdb.firebaseio.com",
  projectId: "hqpacademy",
  storageBucket: "hqpacademy.appspot.com",
  messagingSenderId: "876912422309",
  appId: "1:876912422309:web:5d5feb7bb9f9545ea74c4c",
  measurementId: "G-84KYLE0RM3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const dbRef = ref(database);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


const args = ["m", "b", "à", "g", "z", "è", "v"];

let random = Math.random() * 10000000;
let namberId = Math.floor(random);
let listIndex = Math.random() * 7;
let id = args[Math.floor(listIndex)] + namberId;

let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let phone = document.getElementById("phone");

// cheking fiilds
function checkinputs() {
  if (
    email.value === "" ||
    password.value === "" ||
    password.value.length < 6 ||
    name.value.length < 4 ||
    phone.value.length < 9 ||
    password.value != confirmPassword.value
  ) {
    return false;
  } else {
    return true;
  }
}

// register function
function register() {
  let createAccountdata = {
    name: name.value,
    email: email.value,
    password: password.value,
    phone: phone.value,
    lastLogin: ` ${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `,
  };
  if (checkinputs() === true) {
    createNewuser(
      createAccountdata.email,
      createAccountdata.password,
      createAccountdata
    );
  } else {
    errorEvent("Plase fill this inputs");
    return false;
  }
}

// onsubmit register
document.getElementById("createForm").onsubmit = (ev) => {
  ev.preventDefault();
  register();
};

// creat account in database function
function createNewuser(email, password, allInfo) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), allInfo);
      successEvent("Sign up in successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      errorEvent("this email is alredy in used");
    });
}

// alerts function
function successEvent(text) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: text,
  });
}
function errorEvent(text) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "error",
    title: text,
  });
}
// to login ====================================
// declare varble for inputs login
let loginEmail = document.getElementById("emailLogin");
let loginPassword = document.getElementById("passwordLogin");
// set up  login function
document.getElementById("login").onsubmit = (ev) => {
  ev.preventDefault();
  document.getElementById(
    "btn"
  ).innerHTML = ` <div class="spinner-border text-light" role="status"> <span class="sr-only">Loading...</span></div>`;
  login();
};
function chekEmailAndPassword() {
  let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (
    loginEmail.value === "" ||
    loginPassword.value === "" ||
    loginPassword.value.length === 6 ||
    regExp.test(loginEmail.value) === false
  ) {
    return false;
  } else {
    return true;
  }
}

function login() {
  let loginAccountdata = {
    lastLogin: ` ${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `,
  };

  if (chekEmailAndPassword() === true) {
    SigneIn(loginAccountdata);
  } else {
    errorEvent("Plase Fill Login Inputs");
    return false;
  }
}

function SigneIn(alldata) {
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      successEvent("Welcome to HQP");
      update(ref(database, "users/" + user.uid), alldata);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);     
      errorEvent("This email or password is not correct");
    });
}
let google   = document.getElementById('googleBtn')

google.addEventListener('click' ,  googleSigneIn())

function googleSigneIn(){
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log( 'this is user  ',user);
    console.log( 'this is token  ',token);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorCode);
    console.log(errorMessage);
  });
}

function reCaptcha() {
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      console.log(response);
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    }
  }, auth);
}

// test for getting data in db 
function getUserData(id){
  get(child(dbRef, `users/${id}`)).then((user) => {
    if (user.exists()) {
      console.log(user.val());
      
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}


//end login 


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
    console.log('login is done');
    // ...
  } else {
    // User is signed out
    console.log('login is failde');
    // ...
  }
});
