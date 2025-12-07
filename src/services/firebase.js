import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMD7dNlYoQdtodxHvzFOvWyg3EPDQmMHA",
  authDomain: "connecttocode-4660f.firebaseapp.com",
  projectId: "connecttocode-4660f",
  storageBucket: "connecttocode-4660f.firebasestorage.app",
  messagingSenderId: "167240533856",
  appId: "1:167240533856:web:349c090b92e5ba1b63c005",
  measurementId: "G-RTZXH0RJDW",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;