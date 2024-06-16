// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5gDNtAuI3z-6sf4f3lFyloxbmdmi60u0",
  authDomain: "house-marketplace-app-8f084.firebaseapp.com",
  projectId: "house-marketplace-app-8f084",
  storageBucket: "house-marketplace-app-8f084.appspot.com",
  messagingSenderId: "855794748848",
  appId: "1:855794748848:web:73ce727c0ca28b738d1a75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();