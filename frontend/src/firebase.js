// 1️⃣ Import Firebase core
import { initializeApp } from "firebase/app";

// 2️⃣ Import services we will use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 3️⃣ Paste YOUR firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBrxpFNCPegcPMofYtaj3fzOfA9YQlw3OQ",
  authDomain: "nteasy-5d86f.firebaseapp.com",
  projectId: "nteasy-5d86f",
  storageBucket: "nteasy-5d86f.firebasestorage.app",
  messagingSenderId: "373526474064",
  appId: "1:373526474064:web:2855f9ae41602bc297d055"
};

// 4️⃣ Initialize Firebase app
const app = initializeApp(firebaseConfig);

// 5️⃣ Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
