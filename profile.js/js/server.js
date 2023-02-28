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
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// import logindata from "../Login_Page/js/main";

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
const auth = getAuth(app);



function userdata(name,email) {

  console.log(name);

}
export default userdata