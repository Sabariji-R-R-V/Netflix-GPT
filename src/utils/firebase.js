// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4VkZOJ9clCSmJvCIsXXIm4ytKPBksqJs",
  authDomain: "netflixgpt-977b3.firebaseapp.com",
  projectId: "netflixgpt-977b3",
  storageBucket: "netflixgpt-977b3.appspot.com",
  messagingSenderId: "1011144653731",
  appId: "1:1011144653731:web:bd5cda10e4d3774aa73816",
  measurementId: "G-E84P0B4MF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();