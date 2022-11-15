import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCiCZKUZsLiYqaTUAOUQuYZ33u9mWcb2c",
  authDomain: "crown-clothing-db-3bad5.firebaseapp.com",
  projectId: "crown-clothing-db-3bad5",
  storageBucket: "crown-clothing-db-3bad5.appspot.com",
  messagingSenderId: "765177792201",
  appId: "1:765177792201:web:9f9e60506bd0274fdcaf18",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = async () => {
  await signInWithPopup(auth, provider);
};
