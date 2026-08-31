import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcJ7xgwNCLdAM-1dHzyEhZbvYXJXVZTjc",
  authDomain: "portfolio-admin-b8fee.firebaseapp.com",
  projectId: "portfolio-admin-b8fee",
  storageBucket: "portfolio-admin-b8fee.firebasestorage.app",
  messagingSenderId: "232687746011",
  appId: "1:232687746011:web:020dfb87181c6291b085fe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);