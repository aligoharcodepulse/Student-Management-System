// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8KAcCDFRTOsbmFVYY4cPgWwR1icXjJwo",
  authDomain: "studentmanagementsystem-dfde3.firebaseapp.com",
  projectId: "studentmanagementsystem-dfde3",
  storageBucket: "studentmanagementsystem-dfde3.appspot.com",
  messagingSenderId: "215521369406",
  appId: "1:215521369406:web:33e583667906867b02e06f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}