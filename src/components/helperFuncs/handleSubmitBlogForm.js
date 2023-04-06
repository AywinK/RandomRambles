
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// https://charming-scarab-378023-default-rtdb.europe-west1.firebasedatabase.app/

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBd0qs1JNbBjIgiitgR9wsiivYkfRzU1d0",
    authDomain: "charming-scarab-378023.firebaseapp.com",
    databaseURL: "https://charming-scarab-378023-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "charming-scarab-378023",
    storageBucket: "charming-scarab-378023.appspot.com",
    messagingSenderId: "265999340311",
    appId: "1:265999340311:web:605b781017a338b89a9d52",
    measurementId: "G-M4M3RBBHC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);

const database = getDatabase();
export const reference = ref(database, "/blogsDB");

// export function writeData(arr) {
//     const data = JSON.stringify(arr);
//     console.log(data);
//     set(reference, {
//         data: arr
//     });
// };

export function writeData(data) {
    set(reference, data)
      .then(() => {
        console.log("Data written successfully");
      })
      .catch((error) => {
        console.log("Error writing data: ", error);
      });
  }

export const blogsDBData = onValue(
    reference,
    (snap) => {
        const dataMessage = snap.val();
        console.log(dataMessage);
    },
    []
);

