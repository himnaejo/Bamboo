// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "fiesbase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI81FMRoNBTP0DbI79wzV-DcepBjB0670",
  authDomain: "bamboo-1a8b6.firebaseapp.com",
  projectId: "bamboo-1a8b6",
  storageBucket: "bamboo-1a8b6.appspot.com",
  messagingSenderId: "499244185452",
  appId: "1:499244185452:web:cfba441b472d6ce6752549"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
