// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDSfwokfzUItH8ZeCvUecZ8bWTwrnPFP8Q",
    authDomain: "kutai-pt.firebaseapp.com",
    projectId: "kutai-pt",
    storageBucket: "kutai-pt.appspot.com",
    messagingSenderId: "433532451213",
    appId: "1:433532451213:web:d806f26a981ea1c52465c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    facebook,
    db
}