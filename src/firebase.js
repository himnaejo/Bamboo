import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZmvX4HjmCYJHZ3F4uY5PhtT02EZQWYMs",
  authDomain: "bamboo-67130.firebaseapp.com",
  projectId: "bamboo-67130",
  storageBucket: "bamboo-67130.appspot.com",
  messagingSenderId: "212719158314",
  appId: "1:212719158314:web:730f6880b6de31200b6f53"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
