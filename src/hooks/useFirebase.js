import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';
initializeAuthentication();
const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] =useState({});
    const [error, setError]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle =()=>{
        return signInWithPopup(auth, googleProvider);
    }
    //Email and password registration
    const registerNewUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
        /* .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          setError("");
          verifyEmail();
          setUserName();
        })
        .catch(error=>{
          setError(error.message)
        }) */
    }
    //Verify Email Address
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result=>{
          console.log(result)
        })
      }

    //reset Password
    const handleResetPassword=()=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
        })
        .catch((error) => {
          setError(error.message)
        });
      }
    //set display Name
    const setUserName= ()=>{
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        
      }).catch((error) => {
        setError(error)
      });
    }

    
    //Email and password login
    const processLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
      }
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch(error=>{
            setError(error);
        })
    }
    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return unsubscribe;
    },[])
    return {
        signInUsingGoogle,
        logOut,
        user,
        error,
        setError,
        registerNewUser,
        email,
        setEmail,
        password,
        setPassword,
        processLogin,
        handleResetPassword, 
        setName,
        verifyEmail,
        setUserName
    }
};

export default useFirebase;