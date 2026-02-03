import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoejQewtIakevYdJuwK0Q2G7clQmo9z9o",
  authDomain: "kindergarten-platform.firebaseapp.com",
  projectId: "kindergarten-platform",
  storageBucket: "kindergarten-platform.firebasestorage.app",
  messagingSenderId: "661533630375",
  appId: "1:661533630375:web:ff20f4ef565746392ea082",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
