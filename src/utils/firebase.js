// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVE6lx2YbnXSzzA78tpFcTi77TjWJkCw8",
  authDomain: "atomic-habits-fb63e.firebaseapp.com",
  projectId: "atomic-habits-fb63e",
  storageBucket: "atomic-habits-fb63e.appspot.com",
  messagingSenderId: "1059800409445",
  appId: "1:1059800409445:web:81a1d565b6a4cf6a4e6d8c",
  measurementId: "G-L9BCJ63KPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore(app)

export { db }