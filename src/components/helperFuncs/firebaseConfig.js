// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeQ3ZUCircoBRq1oWaIUbR_JeX3gKZBI8",
  authDomain: "randomrambles-d7bcf.firebaseapp.com",
  projectId: "randomrambles-d7bcf",
  storageBucket: "randomrambles-d7bcf.appspot.com",
  messagingSenderId: "161478699302",
  appId: "1:161478699302:web:6c878b5194670a112939e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firestore db
export const db = getFirestore(app);

export const collectionRef = collection(db, "/blogs");
