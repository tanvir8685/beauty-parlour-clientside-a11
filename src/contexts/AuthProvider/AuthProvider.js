import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword, signInWithPopup,onAuthStateChanged,signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';




export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn=(provider)=>{
        return signInWithPopup(auth, provider)
    }
    const updateUserProfile=(profile)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,profile);

    }
    const providerLogin=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut=()=>{
        localStorage.removeItem('geniousToken');
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscrive= onAuthStateChanged(auth, (currentUser) => {

            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscrive();
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        providerLogin,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;