// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiIombYpbVZhD5VsLiwFI5xjGcnkPJsmM",
  authDomain: "mood-of-e3961.firebaseapp.com",
  projectId: "mood-of-e3961",
  storageBucket: "mood-of-e3961.appspot.com",
  messagingSenderId: "557784884115",
  appId: "1:557784884115:web:bc2a944886df7551cf3e66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbStore = getFirestore(app);
export const auth = getAuth(app);
export const user = auth.currentUser;
export const dbase = getDatabase(app);