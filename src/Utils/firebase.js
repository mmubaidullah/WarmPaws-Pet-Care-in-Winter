// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFKXoXZT_KeeofFnEI5P578SaJhI32O4Y",
  authDomain: "warm-paws-petcare.firebaseapp.com",
  projectId: "warm-paws-petcare",
  storageBucket: "warm-paws-petcare.firebasestorage.app",
  messagingSenderId: "1073879234707",
  appId: "1:1073879234707:web:4541a4e8e5aa477202b566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);