// import { signInWithGooglePopup, createUserDocument, singInWithGoogleRedirect} from "../../utils/firebase/firebase-utils";
import SignUpForm from "../../resources/components/sign-up-form/sign-up-component";

const SignIn = () => {
// const logGoogleUser = async() => {
//     const {user} = await signInWithGooglePopup();
//     createUserDocument(user);
// }

    return(<div>
        <h1>Sign IN</h1>
        {/* <button onClick={logGoogleUser}>Sign In with Google</button> */}
        <SignUpForm/>
    </div>);
}

export default SignIn;