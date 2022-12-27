import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import app from "../firebase/firebase.init";
const auth = getAuth(app);
export const AuthProvider = createContext(app);
const provider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Create New User with Email&password
  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // updateUser Name And Photo
  const updateUser = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  // Login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google Signup
  const googleSignup = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  //Mange User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });

    return () => unSubscribe;
  }, []);

  const userInfo = {
    signup,
    login,
    googleSignup,
    updateUser,
    logout,
    user,
    loading,
  };

  return (
    <div>
      <AuthProvider.Provider value={userInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
