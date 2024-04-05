import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true) // not sure whether is should be true or false by default
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        // updateProfile(auth.currentUser,{
        //     displayName=
        // })        
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const generalLogin = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password);
    }

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user status  :', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const info = { user  , createUser , logOut , generalLogin , googleLogin , loading};

    return ( 
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;