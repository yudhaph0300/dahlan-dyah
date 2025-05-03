// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Ganti dengan konfigurasi dari Firebase Project kamu
const firebaseConfig = {
  apiKey: "AIzaSyAS8ACKC6HzcMVLgsRp8mDzOcFvk9jelaI",
  authDomain: "wedding-dahlan-dyah.firebaseapp.com",
  projectId: "wedding-dahlan-dyah",
  storageBucket: "wedding-dahlan-dyah.firebasestorage.app",
  messagingSenderId: "1091386178337",
  appId: "1:1091386178337:web:e8f2ab6195b3ca0dd3dc60",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
