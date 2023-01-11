import {useState} from "react";
import { createAuthUserWithEmailPassword, createUserDocument } from "../../../utils/firebase/firebase-utils";

const SignUpForm = () => {
    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirm_password:''
    } 
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirm_password} = formFields; 



    const handleSubmit = async(event) =>{
      event.preventDefault();
      if(password !== confirm_password){
        alert("Passwords dont match");
        return;
      }
      try{
        const {user} = await createAuthUserWithEmailPassword(email, password) 
        await createUserDocument(user, {displayName});

      }catch(error){
        console.log(error.code)
        if(error.code === 'auth/email-already-in-use'){
          alert("Cannot create user, email already exists");
        }
      }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }


   return(
   <div>
    <h1>Sign Up form</h1>
    <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input required type="text" name="displayName" value={displayName} onChange={handleChange}/>
        <label>Email</label>
        <input required type="email" name="email" value={email} onChange={handleChange}/>
        <label>Password</label>
        <input required type="password" name="password" value={password} onChange={handleChange} minLength={6}/>
        <label>Confirm Password</label>
        <input required type="password" name="confirm_password" value={confirm_password} onChange={handleChange} minLength={6}/>
        <button type="submit">Sign Up</button>
    </form>
   </div>);   
}

export default SignUpForm;