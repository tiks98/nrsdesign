// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC32CSaZbgA1VzRYGnlsGeMoqrKkJZqiuw",
    authDomain: "nrs-design.firebaseapp.com",
    projectId: "nrs-design",
    storageBucket: "nrs-design.firebasestorage.app",
    messagingSenderId: "1003276672483",
    appId: "1:1003276672483:web:337e39c2317d5bb3da94d6",
    measurementId: "G-88ZTZ7M70Q"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
