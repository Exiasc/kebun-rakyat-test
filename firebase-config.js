// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyVYeJuhZtfXFt4T1qvTGUi9J1T5gGOv8",
  authDomain: "kebun-rakyat-alpha.firebaseapp.com",
  projectId: "kebun-rakyat-alpha",
  storageBucket: "kebun-rakyat-alpha.firebasestorage.app",
  messagingSenderId: "528638822991",
  appId: "1:528638822991:web:ef9bed0997f45f8564b83a",
  measurementId: "G-SYV7ZFB5CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
