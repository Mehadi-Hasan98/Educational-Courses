// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9nGkq6-QIHqtJs2Oo4Yqt3_LC6D4alAE",
  authDomain: "educational-courses.firebaseapp.com",
  projectId: "educational-courses",
  storageBucket: "educational-courses.appspot.com",
  messagingSenderId: "508926193075",
  appId: "1:508926193075:web:3aeee8693a8768d161afc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;