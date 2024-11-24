// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0T0_UkwtaC8huqaRMK1MR3GkOfEfnZn0",
  authDomain: "react-router-firebage.firebaseapp.com",
  projectId: "react-router-firebage",
  storageBucket: "react-router-firebage.firebasestorage.app",
  messagingSenderId: "839671282835",
  appId: "1:839671282835:web:5d42e9b67643f3b68fe166",
  measurementId: "G-EYLDWTXL7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
