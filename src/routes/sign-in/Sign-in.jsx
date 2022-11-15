import { signInWithGooglePopup} from "../../utils/firebase/firebase-utils"

const SignIn = () => {
const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    signInWithGooglePopup(response);
}

    return(<div>
        <h1>Sign IN</h1>
        <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>);
}

export default SignIn;