import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAZmvX4HjmCYJHZ3F4uY5PhtT02EZQWYMs",
//   authDomain: "bamboo-67130.firebaseapp.com",
//   projectId: "bamboo-67130",
//   storageBucket: "bamboo-67130.appspot.com",
//   messagingSenderId: "212719158314",
//   appId: "1:212719158314:web:730f6880b6de31200b6f53"
// };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
