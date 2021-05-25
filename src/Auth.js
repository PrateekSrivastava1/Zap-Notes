import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home";
import SignInSide from "./SignInSide";
import fire from "./fire";

const Auth = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
     fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message); 
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;  
          }
        });
  }
  const handleSignup = () => {
    clearErrors();
    fire
       .auth()
       .createUserWithEmailAndPassword(email, password)
       .catch(err => {
         switch(err.code){
           case "auth/email-already-in-use":
           case "auth/invalid-email":
             setEmailError(err.message);
             break;
           case "auth/weak-password":
             setPasswordError(err.message);
             break;  
         }
       });
 }
 
 const handleLogout = () => {   
   fire.auth().signOut();
 }; 
 const authListener = () => {
   fire.auth().onAuthStateChanged(user =>  {
     console.log(user); 
     if(user){ 
      clearInputs(); 
       setUser(user); 
     }
     else
     {
       setUser("");  
     } 
   });
 };

 useEffect(() => {
    authListener();
 }, []); 
 console.log(user);
return (
    <div >
    {user ? ( 
        <Home handleLogout={handleLogout} /> 
    ) : ( 
        <SignInSide 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount} 
            emailError={emailError}
            passwordError={passwordError} 
        /> 
    )} 
    </div>
);
}

export default Auth;