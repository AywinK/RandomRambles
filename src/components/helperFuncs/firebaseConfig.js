// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW8JQ6B4HZPwy2x_41mNur3VNk10CRQD8",
  authDomain: "randomrambles-ea0b4.firebaseapp.com",
  projectId: "randomrambles-ea0b4",
  storageBucket: "randomrambles-ea0b4.appspot.com",
  messagingSenderId: "970581368388",
  appId: "1:970581368388:web:b92ad5bb1cbc69c9d3a611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firestore db
export const db = getFirestore(app);

export const collectionRef = collection(db, "/blogs");
