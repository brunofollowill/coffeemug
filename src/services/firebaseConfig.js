import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8gqsncU295CIPGApULI3QEWx8fpqMb8I",
  authDomain: "coffee-mug-artes.firebaseapp.com",
  projectId: "coffee-mug-artes",
  storageBucket: "coffee-mug-artes.appspot.com",
  messagingSenderId: "445245832221",
  appId: "1:445245832221:web:920061f2da489875349af4",
  measurementId: "G-YC34E8E0TL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
