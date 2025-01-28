// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYDFz2SjRNZvmh7PJsrW5deYkVDBezRcw",
    authDomain: "art-and-craft-49449.firebaseapp.com",
    projectId: "art-and-craft-49449",
    storageBucket: "art-and-craft-49449.firebasestorage.app",
    messagingSenderId: "768228282780",
    appId: "1:768228282780:web:fed5b12b95aeae0dbbb859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;