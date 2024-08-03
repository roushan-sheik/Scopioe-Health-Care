// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIR-g7EL0nQ3VUvi-_fisyrLEDLQ4k5lA",
  authDomain: "scopioe-health-care.firebaseapp.com",
  projectId: "scopioe-health-care",
  storageBucket: "scopioe-health-care.appspot.com",
  messagingSenderId: "212768461511",
  appId: "1:212768461511:web:0c4bd0fe60a00ae89824e2",
  measurementId: "G-F6JXHBSYB4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
