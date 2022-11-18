import { auth, signInWithGooglePopup, createUserDocument, singInWithGoogleRedirect} from "../../utils/firebase/firebase-utils"
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {

useEffect(() => {
 async function a(){
    const response = await getRedirectResult(auth);
   if(response){
    const userDocRef = await createUserDocument(response.user);
   }
 }
 a();
},[]);    

const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    createUserDocument(user);
}

    return(<div>
        <h1>Sign IN</h1>
        <button onClick={logGoogleUser}>Sign In with Google</button>
        <button onClick={singInWithGoogleRedirect}>Sign In with Google Redirect</button>
    </div>);
}

export default SignIn;