import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_MY_API_KEY,
  authDomain: process.env.REACT_APP_MY_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_MY_PROJECT_ID,
  storageBucket: process.env.REACT_APP_MY_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MY_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MY_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
