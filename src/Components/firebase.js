v// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd1XbRebZixR8FXw8_JAF9nAPDlnbsDNs",
  authDomain: "netflix-gpt-7780e.firebaseapp.com",
  projectId: "netflix-gpt-7780e",
  storageBucket: "netflix-gpt-7780e.firebasestorage.app",
  messagingSenderId: "172201785306",
  appId: "1:172201785306:web:762edda8ceaa64649ff2e3",
  measurementId: "G-YCPCMN3W9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);