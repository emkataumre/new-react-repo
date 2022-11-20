import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAs8mlIrHQvULhGqTWrclbq58q_QviJ-rg",
  authDomain: "react-project-b2f39.firebaseapp.com",
  databaseURL: "https://react-project-b2f39-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-project-b2f39",
  storageBucket: "react-project-b2f39.appspot.com",
  messagingSenderId: "945397414630",
  appId: "1:945397414630:web:d5a91f314a63f6ff4c1927",
  measurementId: "G-E93BZPNQBZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage();

export { db, auth, storage};