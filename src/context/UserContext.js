import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] =useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //why are we doing this?
    //managing users

    useEffect ( () => {
       const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state change', currentUser);
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {user, loading, createUser, signIn, logOut, googleSignIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext; 