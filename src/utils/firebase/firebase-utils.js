import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf82nnU65dn1fGrjI-0sqZb31zRSV1V5M",
  authDomain: "crown-clothing-bcd1c.firebaseapp.com",
  projectId: "crown-clothing-bcd1c",
  storageBucket: "crown-clothing-bcd1c.appspot.com",
  messagingSenderId: "253120788472",
  appId: "1:253120788472:web:718cfea38132bc787d880d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore();

export const createUserDocument = async (userAuth) => {
  if (!userAuth) return;
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

export const createAuthUserWithEmailPassword = async (email, password) => {
  if (email && password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
  return "Error";
};
