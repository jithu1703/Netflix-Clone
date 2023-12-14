import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAm5SIkzTuGvXVWqpFIsZHCQXJbBLF4e3s",
  authDomain: "netflix-clone-30555.firebaseapp.com",
  projectId: "netflix-clone-30555",
  storageBucket: "netflix-clone-30555.appspot.com",
  messagingSenderId: "712502363543",
  appId: "1:712502363543:web:4ba589166481bbed7530d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 