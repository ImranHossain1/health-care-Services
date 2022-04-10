import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] =useState({});
    const [error, setError]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle =()=>{
        return signInWithPopup(auth, googleProvider);
    }
    //Email and password registration
    const registerNewUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          setError("");
          //verifyEmail();
          //setUserName();
        })
        .catch(error=>{
          setError(error.message)
        })
    }

    //Email and password login
    const processLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
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
        processLogin
    }
};

export default useFirebase;