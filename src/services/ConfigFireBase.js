// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHPXLPuzsRxb5kqS9IjJZr0TiqgmsI7w0",
  authDomain: "react-proyecto-breadmasters.firebaseapp.com",
  projectId: "react-proyecto-breadmasters",
  storageBucket: "react-proyecto-breadmasters.appspot.com",
  messagingSenderId: "89111715825",
  appId: "1:89111715825:web:8bb28c1f65e30b28152e50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)