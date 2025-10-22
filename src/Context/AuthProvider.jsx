import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [users, setUser] = useState(null);
  const [loadig, setLoading] = useState(true);
  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    users,
    setUser,
    SignUp,
    LogIn,
    LogOut,
    profileUpdate,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};
export default AuthProvider;
