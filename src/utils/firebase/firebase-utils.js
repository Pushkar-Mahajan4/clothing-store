import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocument = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    console.log(displayName, email, createdAt);
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
};

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);
