// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7e2kuIahMUPLSLIWZwfQoefhv4l_X1yI",
  authDomain: "the-day-of-love.firebaseapp.com",
  projectId: "the-day-of-love",
  storageBucket: "the-day-of-love.firebasestorage.app",
  messagingSenderId: "866914173233",
  appId: "1:866914173233:web:53e815c85d4a87bc87f010",
  measurementId: "G-SLP81857QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);