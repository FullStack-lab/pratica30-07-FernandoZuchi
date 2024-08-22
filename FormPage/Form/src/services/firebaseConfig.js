import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDeB9vFEPgfhmWYN67DMzpIlrVtJmRn3V4",
  authDomain: "react-auth-4fc6b.firebaseapp.com",
  projectId: "react-auth-4fc6b",
  storageBucket: "react-auth-4fc6b.appspot.com",
  messagingSenderId: "950988020118",
  appId: "1:950988020118:web:ac4f5c3dc903c2f4eb65b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);