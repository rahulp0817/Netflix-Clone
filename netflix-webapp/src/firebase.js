import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCwhvNtNPLdAy4XzKvqUcjVee3AbiSgdh4",
  authDomain: "movie-webapp-12951.firebaseapp.com",
  projectId: "movie-webapp-12951",
  storageBucket: "movie-webapp-12951.appspot.com",
  messagingSenderId: "62676097296",
  appId: "1:62676097296:web:63b0d394f0bcc1c0392d95"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};
export default app;