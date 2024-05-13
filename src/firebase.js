// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlIqc8PQgVuvBGYPpM1Z88-cUiSv3iNwE",
    authDomain: "projectmanagement-7b6b8.firebaseapp.com",
    projectId: "projectmanagement-7b6b8",
    storageBucket: "projectmanagement-7b6b8.appspot.com",
    messagingSenderId: "585800310719",
    appId: "1:585800310719:web:289d3c18257649a2100b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;