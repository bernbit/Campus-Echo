import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getMessaging } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArBmCPp1ewYg2Tk2PBTXAment9d54gY6w",
  authDomain: "campus-echo.firebaseapp.com",
  projectId: "campus-echo",
  storageBucket: "campus-echo.appspot.com",
  messagingSenderId: "688459237727",
  appId: "1:688459237727:web:f3403a777051fc13960eea",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const messaging = getMessaging(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
