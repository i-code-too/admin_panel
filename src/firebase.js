import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "adminpanel-4d6d2.firebaseapp.com",
  projectId: "adminpanel-4d6d2",
  storageBucket: "adminpanel-4d6d2.appspot.com",
  messagingSenderId: "510207315947",
  appId: "1:510207315947:web:ac4e8cc320829950d293ae",
  measurementId: "G-N77HBBM97Q"
}
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()