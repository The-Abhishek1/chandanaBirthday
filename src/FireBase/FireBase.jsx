import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCLtuBVxesBSJQdRL9K2wyQFJHuP3RC1H4",

  authDomain: "idiot-fcd39.firebaseapp.com",

  projectId: "idiot-fcd39",

  storageBucket: "idiot-fcd39.appspot.com",

  messagingSenderId: "703429483562",

  appId: "1:703429483562:web:fcae8a057c670c478bb753",

  measurementId: "G-5BHM2C8NM9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
