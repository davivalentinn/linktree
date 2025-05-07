
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAFh6ijIaMEdP1gxVwg4cBjYgiPlOquw5k",
  authDomain: "reactlinktreelinks.firebaseapp.com",
  projectId: "reactlinktreelinks",
  storageBucket: "reactlinktreelinks.firebasestorage.app",
  messagingSenderId: "264578883169",
  appId: "1:264578883169:web:fe242e6694a0aff5959420"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db};