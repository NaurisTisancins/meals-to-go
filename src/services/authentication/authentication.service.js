import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEwntXOnkQ7-w6_Rko6fPu0S2GIY1eoiw",
  authDomain: "meals-to-go-nauris-tisancins.firebaseapp.com",
  projectId: "meals-to-go-nauris-tisancins",
  storageBucket: "meals-to-go-nauris-tisancins.appspot.com",
  messagingSenderId: "566798509900",
  appId: "1:566798509900:web:a9287711b8df45b89451e9",
  measurementId: "G-8R87Q0LR82",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const loginRequest = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const registrationRequest = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);
