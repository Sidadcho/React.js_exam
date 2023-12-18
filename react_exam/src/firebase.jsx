import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5SSTpXF1QScV_MPIJZg9fKiqCQTVBdk8",
  authDomain: "react-exam-softuni.firebaseapp.com",
  projectId: "react-exam-softuni",
  storageBucket: "react-exam-softuni.appspot.com",
  messagingSenderId: "799742469114",
  appId: "1:799742469114:web:66a292b49c451e6c53ba43"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()