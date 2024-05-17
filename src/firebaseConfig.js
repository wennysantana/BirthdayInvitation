// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYG7I9c2WvS6PFLHdGnMmTwJ4jIIcCFIY",
  authDomain: "birthday-invitation-be729.firebaseapp.com",
  projectId: "birthday-invitation-be729",
  storageBucket: "birthday-invitation-be729.appspot.com",
  messagingSenderId: "131029463092",
  appId: "1:131029463092:web:4779c8d1eb8ef2ed909a61",
  measurementId: "G-JB5HYTD9QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };