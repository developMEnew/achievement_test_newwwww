import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBMUoR5qCdxF16C2FmcxNKkPacInJY9cAY",
  authDomain: "achievements-aba10.firebaseapp.com",
  projectId: "achievements-aba10",
  storageBucket: "achievements-aba10.firebasestorage.app",
  messagingSenderId: "684641504359",
  appId: "1:684641504359:web:8acdae8a6094c8fdf698c2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();